var sorthighprice=require('../models/product_models');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    sorthighprice.sortbyhighprice(function(err,rows){
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

router.post("/",function(req,res,next){
    sorthighprice.sortingbyrnage(req.body,function(err,rows){
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