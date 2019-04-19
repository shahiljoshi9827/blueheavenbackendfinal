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
var brand=require('./routes/brand_routes');
var supplier=require('./routes/supplier_routes');
var ordersupplierstatus=require('./routes/ordersupplier_routes');
var supplierside=require('./routes/supplierside_routes');
var supplierside1=require('./routes/supplierside_routes1');
var supplierup=require('./routes/supplier1_routes');
var count=require('./routes/count_routes');
var count1=require('./routes/count_routes1');
var temp_order=require('./routes/temp_order_routes');
var temp_order1=require('./routes/temp_order_routes1');
var topproductbyname=require('./routes/topproductbyname_routes');
var sortbyhighandrangeprice=require('./routes/sortbyhighpriceproduct_routes');
var sortbylowprice=require('./routes/sortbylowpriceproduct_routes');
var payment=require('./routes/payment_routes');
var CheckRepeatProduct=require('./routes/checkrepeatproduct_routes');
var mainorder=require('./routes/mainorder_routes');
var addorder=require('./routes/mainorder_routes1');
var bill=require('./routes/bill_routes');
var addbill=require('./routes/bill_routes1');
var billdetails=require('./routes/bill_routes_details');
var confirmorder=require('./routes/confirmation_routes');
var wishlist=require('./routes/wishlist_routes');
var search=require('./routes/search_routes');
var app = express();
var similerproduct=require('./routes/product_routes2');
var trackorder=require('./routes/trackorder_routes');


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
app.use('/brand',brand);
app.use('/supplier',supplier);
app.use('/ordersupplierstatus',ordersupplierstatus);
app.use('/supplierside',supplierside);
app.use('/suppliersidebyid',supplierside1);
app.use('/supplierup',supplierup);
app.use('/count',count);
app.use('/count1',count1);
app.use('/temp_order',temp_order);
app.use('/temp_order_deleteall',temp_order1);
app.use('/topproductbyname',topproductbyname);
app.use('/sortbyhighandrangeprice',sortbyhighandrangeprice);
app.use('/sortbylowprice',sortbylowprice);
app.use('/addpayment',payment);
app.use('/CheckRepeatProduct',CheckRepeatProduct);
app.use('/mainorder',mainorder);
app.use('/addorder',addorder);
app.use('/bill',bill);
app.use('/addbill',addbill);
app.use('/billdetails',billdetails);
app.use('/confirmorder',confirmorder);
app.use('/wishlist',wishlist);
app.use('/search',search);
app.use('/similerproduct',similerproduct);
app.use('/trackorder',trackorder);
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
