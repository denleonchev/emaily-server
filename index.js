const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')
require('./models/User');

mongoose.connect(keys.mongoURI);

require('./services/passport');

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 *1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

///http://emaily-server.beninaction16.c9users.io/auth/google



app.listen(process.env.PORT, process.env.IP);