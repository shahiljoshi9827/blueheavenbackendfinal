var temp_order=require('../models/temp_order_model');
var express=require('express');
var router=express.Router();


router.post('/',function(req,res,next){
    console.log(req.body);
    temp_order.deletealltemporder(req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});

router.put('/:temp_order_id',function(req,res,next){
    temp_order.updatetemporder(req.body,req.params.temp_order_id,function(err,rows){
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