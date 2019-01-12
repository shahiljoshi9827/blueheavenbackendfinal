var db=require('../dbconnection')
var feedback={
    getfeedbacks(callback)
    {
        return db.query("select f.*,p.* from feedback f,product p where f.fk_product_id=p.product_id",callback);
    }   
    
  
};
module.exports=feedback;

