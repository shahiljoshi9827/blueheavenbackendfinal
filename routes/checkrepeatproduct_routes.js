var CheckRepeatProduct=require('../models/temp_order_model');
var express = require('express');
var router = express.Router();

  router.post('/',function(req,res,next){
    CheckRepeatProduct.checkRepeatProduct(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     console.log(rows);
     }
    });
  });
;
  module.exports=router;