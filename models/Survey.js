const mongoose = require('mongoose')
const { Schema } = mongoose
const RecipientSchema = require('./Recipient')
const AnswerSchema = require('./Answer')

const surveySchema = {
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  answers: [AnswerSchema],
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  dateSent: Date,
  lastResponded: Date
}

mongoose.model('surveys', surveySchema)
