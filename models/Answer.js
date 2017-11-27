const mongoose = require('mongoose')
const { Schema } = mongoose

const answerSchema = {
  name: String,
  count: {
    default: 0,
    type: Number
  }
}

module.exports = answerSchema
