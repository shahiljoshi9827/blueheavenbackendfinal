var product=require('../models/product_models');
var express=require('express');
var router=express.Router();

router.get('/:fk_email_id', function (req, res, next) {
    
    product.pastorder(req.params.fk_email_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});

router.get('/:brand_id/:product_id', function (req, res, next) {
    
    product.similerproduct(req.params.brand_id,req.params.product_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
module.exports=router;