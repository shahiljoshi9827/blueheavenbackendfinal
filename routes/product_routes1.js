var product=require('../models/product_models');
var express=require('express');
var router=express.Router();

router.get("/:brand_name",function(req,res,next){
    product.ProductBrandjoin(req.params.brand_name,function(err,rows){
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



router.put('/:product_id',function(req,res,next){
    product.updateProduct(req.body,req.params.product_id,function(err,rows){
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