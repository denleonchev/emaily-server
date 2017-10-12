const mongoose = require('mongoose');
const { URL } = require('url');
const Path = require('path-parser');
const _ = require('lodash');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map((email) => ({ email })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
          await mailer.send();
          await survey.save();
          req.user.credits -= 1;
          var user = await req.user.save();
          res.send(user);
         } catch(err) {
           res.status(422).send(err);
         }
      });

      app.post('/api/surveys/webhooks', (req, res) => {
        const events = _.chain(req.body)
          .map(({email, url}) => {
            const pathname = new URL(url).pathname;
            const p = new Path('/api/surveys/:surveyId/:choice');
            const match = p.test(pathname);
            if(match) {
              return {
                email,
                surveyId: match.surveyId,
                choice: match.choice
              }
            }
          })
          .compact()
          .uniqBy('email', 'surveyId')
          .value();
        console.log('events', events);
      })
};