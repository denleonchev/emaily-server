const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = {
    googleId: String  
};

mongoose.model('users', userSchema);