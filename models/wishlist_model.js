var db=require('../dbconnection');

var wishlist={

getAllwishlist:function(callback){
    return db.query('select * from wishlist',callback);
},
getallwishlistById:function(fk_user_email_id,callback){
    return db.query('select * from wishlist where fk_user_email_id=?',[fk_user_email_id],callback)
},
addintowishlist:function(item,callback){
     return db.query('insert into wishlist (fk_user_email_id,fk_product_id,fk_product_name,fk_product_image,fk_product_price,fk_brand_id) values(?,?,?,?,?,?)',[item.fk_user_email_id,item.fk_product_id,item.fk_product_name,item.fk_product_image,item.fk_product_price,item.fk_brand_id],callback);
},
deletefromwishlist:function(w_id,callback){
         return db.query('delete from wishlist where w_id=?',[w_id],callback)
},
deleteAllcart:function(item,callback){
    console.log(item);
    var delarr=[];
    for(i=0;i<item.length;i++){
        delarr[i]=item[i].fk_user_email_id;
    }
    return db.query('delete from wishlist where fk_user_email_id in (?)',[delarr],callback)
}

 }
module.exports=wishlist;
