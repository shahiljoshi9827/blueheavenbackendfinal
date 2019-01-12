var user=require('../models/user_model');
var express=require('express');
var router= express.Router();

router.post('',function(req,res,next){
    user.deleteall(req.body,function(err,rows){
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

router.get('/:user_email_id',function(req,res,next){
    user.forgetpassword(req.params.user_email_id,function(err,rows){
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