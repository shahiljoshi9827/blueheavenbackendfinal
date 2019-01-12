var express = require('express');
var router = express.Router();
var demo = require("../models/nodemailerdemo");
router.post('/',function(req,res,next){

    console.log(req.body);
    demo.sendMail(req.body,function(err,message){

        if(err)
        {
            console.log(err);
            res.json(err);
            
        }
        else
        {
            return res.json({success: true, msg: 'sent'});//or return count for 1 or 0
        }
    });
});

module.exports=router; 