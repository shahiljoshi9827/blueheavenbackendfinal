var wishlist = require('../models/wishlist_model')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
wishlist.getAllwishlist(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
  
 router.get('/:fk_user_email_id', function (req, res, next) {
   wishlist.getallwishlistById(req.params.fk_user_email_id, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });
 router.post('/', function (req, res, next) {
    wishlist.addintowishlist(req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
});
router.post('/:w_id', function (req, res, next) {
    wishlist.deletefromwishlist(req.params.w_id, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});

module.exports = router;
