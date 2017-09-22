const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = {
    title: String,
    body: String,
    subject: String,
    recipients: [String],
};

mongoose.model('surveys', surveySchema);