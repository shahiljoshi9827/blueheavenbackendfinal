var bill=require('../models/bill_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    bill.getbill(function(err,rows){
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


router.delete('/:Bill_id',function(req,res,next){
    bill.deleteBill(req.params.Bill_id,function(err,rows){
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
    bill.deleteAllbill(req.body,function(err,rows){
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