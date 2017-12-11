const mongoose = require('mongoose')
const { URL } = require('url')
const Path = require('path-parser')
const _ = require('lodash')

const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients, answers } = req.body
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map((email) => ({ email })),
      answers: answers.map((name) => ({ name })),
      _user: req.user.id,
      dateSent: Date.now()
    })

    const mailer = new Mailer(survey, surveyTemplate(survey))
    try {
      await mailer.send()
      await survey.save()
      req.user.credits -= 1
      var user = await req.user.save()
      res.send(user)
    } catch (err) {
      console.log(err)
      res.status(422).send(err)
    }
  })

  app.get('/api/surveys', requireLogin, async (req, res) => {
    const { page = 1, recordsPerPage = 5, search = '' } = req.query
    const surveysQuery = {_user: req.user}
    if (search) {
      surveysQuery.$text = {$search: search}
    }
    const items = Survey.find(surveysQuery, {title: 1, subject: 1, dateSent: 1, answers: 1})
      .sort({dateSent: 1})
      .skip(recordsPerPage * (page - 1))
      .limit(recordsPerPage)
      .exec()
    const totalSurveys = Survey.find(surveysQuery, {title: 1, subject: 1, dateSent: 1, answers: 1})
      .sort({dateSent: 1})
      .count()
      .exec()
    const data = {
      items: await items,
      pages: Math.ceil((await totalSurveys) / recordsPerPage),
      search,
      page: Number(page)
    }
    res.send(data)
  })

  app.get('/api/surveys/:surveyId/:choice', async (req, res) => {
    res.send('Thanks for voting!')
  })

  app.post('/api/surveys/webhooks', (req, res) => {
    _.chain(req.body)
      .map(({email, url}) => {
        const pathname = new URL(url).pathname
        const p = new Path('/api/surveys/:surveyId/:choice')
        const match = p.test(pathname)
        if (match) {
          console.log(email, match.surveyId, match.choice)
          return {
            email,
            surveyId: match.surveyId,
            choice: match.choice
          }
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({email, surveyId, choice}) => {
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          },
          answers: {
            $elemMatch: { name: decodeURIComponent(choice) }
          }
        }, {
          $inc: { 'answers.$.count': 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }).exec()
      })
      .value()
  })
}
