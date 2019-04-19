var supplierside=require('../models/supplierside_model');
var express=require('express');
var router=express.Router();



router.get("/:fk_user_email_id",function(req,res,next){
    supplierside.getsuppliersideorder(req.params.fk_user_email_id,function(err,rows){
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
router.put('/:fk_user_email_id',function(req,res,next){
    supplierside.updatesupplierstatus(req.body,req.params.fk_user_email_id,function(err,rows){
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