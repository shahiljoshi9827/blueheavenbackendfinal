var db=require('../dbconnection');
var order={
    getallorder:function(callback)
    {
        return db.query("select o.*,p.* from ordertbl o,product p where o.fk_product_id=p.product_id",callback);
    }
    
  
};
module.exports=order;

