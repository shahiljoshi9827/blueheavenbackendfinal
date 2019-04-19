
var search=require('../models/search_model');
var express=require('express');
var router=express.Router();

router.get("/:word",function(req,res,next){
    search.getsearchProduct (req.params.word,function(err,rows){
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

