var mainorder=require('../models/mainorder_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    mainorder.getAllmainOrder(function(err,rows){
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
    mainorder.deleteOrder(req.params.order_id,function(err,rows){

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
    mainorder.deleteAllmainOrder(req.body,function(err,rows){
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