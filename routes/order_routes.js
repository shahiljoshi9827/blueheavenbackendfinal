var order=require('../models/order_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    order.getallorder(function(err,rows){
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

router.put('/',function(req,res,next){
    order.orderstatus(req.body,function(err,rows){
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

router.delete('/:order_id',function(req,res,next){
    order.deleteorder(req.params.order_id,function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});
router.post('/',function(req,res,next){
    order.addorderdetail(req.body,function(err,rows){
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

router.get('/:fk_email_id',function(req,res,next){
    order.getorderbyjoin(req.params.fk_email_id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});
module.exports=router;  