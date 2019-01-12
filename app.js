var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors=require('cors');
var getalluser_login_getalluserbyid=require('./routes/user_routes1');
var signup_editprofile=require('./routes/user_routes2');
var deltealluser_forgetpassword=require('./routes/user_routes3');
var add_get_updateimage_getbyid_product=require('./routes/product_routes');
var joinproduct_update=require('./routes/product_routes1');
var order=require('./routes/order_routes');
var feedback=require('./routes/feedback_routes');
var mailer=require('./routes/demoemailnodemailer');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/getalluser_login_getalluserbyid',getalluser_login_getalluserbyid);
app.use('/signup_editprofile',signup_editprofile);
app.use('/deltealluser_forgetpassword',deltealluser_forgetpassword);
app.use('/add_get_updateimage_getbyid_product',add_get_updateimage_getbyid_product);
app.use('/productjoin_update',joinproduct_update);
app.use('/order',order);
app.use('/feedback',feedback);
app.use('/mail',mailer);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
