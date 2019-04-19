var sortlowprice=require('../models/product_models');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    sortlowprice.sortbylowprice(function(err,rows){
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