var createError = require('http-errors');
var express = require('express');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('req-flash');
var app = express();

// Set Env
require('dotenv').load();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// For Passport
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

// For Flash
app.use(flash());

// Routes
require('./app/routes/auth.js')(app, passport);

// Models
var models = require('./app/models');

//load passport strategies
require('./config/passport/passport.js')(passport, models.Users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
