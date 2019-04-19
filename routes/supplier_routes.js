var supplier=require('../models/supplier_model');
var express=require('express');
var router=express.Router();

// router.get("/",function(req,res,next){
//     supplier.getalluser(function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         else
//         {
//             res.json(rows);  
//         }  
//     });
// });

router.get('/:type',function(req,res,next){
    supplier.getalluser(req.params.type,function(err,rows){
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
    supplier.supplierorderstatus(req.body,function(err,rows){
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

router.delete('/:user_email_id',function(req,res,next){
    supplier.deletesupplier(req.params.supplier_id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});

router.post("/",function(req,res,next){
    supplier.addsupplier(req.body,function(err,rows){
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