
var product=require('../models/product_models');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/products');
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});


router.post("/",upload.single('product_image'),function(req,res,next){
    product.addProduct(req.body,req.file.filename,function(err,rows){
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
    product.getallProduct(function(err,rows){
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

router.put("/",upload.single('product_image'),function(req,res,next){
    product.updateProductwithimage(req.body,req.file.filename,function(err,rows){
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



router.get('/:product_id',function(req,res,next){
    product.getProductById(req.params.product_id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});

router.delete('/:product_id',function(req,res,next){
    product.deleteproduct(req.params.product_id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
});


module.exports=router;