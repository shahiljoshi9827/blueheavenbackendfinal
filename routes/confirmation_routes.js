var confirmation=require('../models/confermation_model');
var express=require('express');
var router=express.Router();

router.get('/:fk_email_id/:bill_id/:fk_main_order_id',function(req,res,next){
    confirmation.getalldetailsofbill(req.params.fk_email_id,req.params.bill_id,req.params.fk_main_order_id,function(err,rows){
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
