const keys = require('../../config/keys')

const renderAnswers = (survey) => survey.answers.reduce((prev, curr) => {
  return prev + `
    <div>
      <a href="${keys.redirectDomain}/api/surveys/${survey.id}/${curr.name}">${(curr.name)}</a>
    </div>
  `
}, '')

module.exports = (survey) => {
  return `
    <html>
      <body>
        <h3>I'd like your input!</h3>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>
        ${renderAnswers(survey)}
      </body>
    </html>
  `
}
