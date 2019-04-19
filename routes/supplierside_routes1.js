var supplierside=require('../models/supplierside_model');
var express=require('express');
var router=express.Router();



router.get("/:fk_order_id",function(req,res,next){
    supplierside.getsuppliersideorderbyid(req.params.fk_order_id,function(err,rows){
        // console.log(fk_order_id);
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