var feedback=require('../models/feedback_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    feedback.getfeedbacks(function(err,rows){
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

router.get("/:product_id",function(req,res,next){
    feedback.getfeedbackbyproductid(req.params.product_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});
router.post('/',function(req,res,next){
    feedback.addfeedback(req.body,function(err,rows){
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