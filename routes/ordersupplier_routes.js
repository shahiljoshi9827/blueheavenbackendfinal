var ordersupplier=require('../models/ordersupplier_model');
var express=require('express');
var router= express.Router();

router.post('/',function(req,res,next){
    ordersupplier.addordersupplier(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;
