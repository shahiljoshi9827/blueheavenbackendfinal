var user=require('../models/user_model');
var express=require('express');
var router= express.Router();
router.post('/',function(req,res,next){
    user.signup(req.body,function(err,rows){
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

router.put('/:user_email_id',function(req,res,next){
        user.editprofile(req.body,req.params.user_email_id,function(err,rows){
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
    user.deleteprofile(req.params.user_email_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})

module.exports=router;