var temp_order=require('../models/temp_order_model');
var express=require('express');
var router=express.Router();


router.post('/',function(req,res,next){
    temp_order.addtemporder(req.body,function(err,rows){
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
router.get('/',function(req,res,next){
    temp_order.getalltemporder(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});

router.get('/:fk_email_id',function(req,res,next){
    temp_order.getorderbyjoin(req.params.fk_email_id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});
router.delete('/:temp_order_id',function(req,res,next){
    temp_order.deletetemporder(req.params.temp_order_id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});
router.post('/',function(req,res,next){
    console.log(req.body);
      product.deleteallProduct(req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});

module.exports=router;