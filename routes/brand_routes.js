var brand=require('../models/brand_model');
var express=require('express');
var router=express.Router();
router.post("/",function(req,res,next){
    brand.addbrand(req.body,function(err,rows){
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

router.get("/",function(req,res,next){
    brand.getallbrand(function(err,rows){
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

// router.get("/brand_name",function(req,res,next){
//     brand.ProductBrandjoin(req.params.brand_name,function(err,rows){
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
router.get("/:brand_name",function(req,res,next){
    brand.ProductBrandjoin(req.params.brand_name,function(err,rows){
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


router.delete('/:brand_id',function(req,res,next){
    brand.deletebrand(req.params.brand_id,function(err,rows){
            
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});



module.exports=router;