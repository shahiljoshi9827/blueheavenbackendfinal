var payment=require('../models/payment_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    payment.getallpayment(function(err,rows){
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
router.post('/',function(req,res,next){
    console.log(req.body);
    payment.addpayment(req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});
module.exports=router;