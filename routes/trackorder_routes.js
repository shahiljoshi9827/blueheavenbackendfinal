var track=require('../models/trackorder_model');
var express=require('express');
var router=express.Router();


router.get('/:mainorder_id/:fk_email_id', function (req, res, next) {
    
    track.trackorder(req.params.mainorder_id,req.params.fk_email_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
module.exports=router;