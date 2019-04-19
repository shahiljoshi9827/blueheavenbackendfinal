var supplier=require('../models/supplier_model');
var express=require('express');
var router=express.Router();

router.put('/:user_email_id',function(req,res,next){
    supplier.updatesupplier(req.body,req.params.supplier_id,function(err,rows){
        console.log(req.body);
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