var db=require('../dbconnection');
var supplierside={
    getsuppliersideorder:function(fk_user_email_id,callback){
        return db.query("select o.*,p.*,u.*,os.* from ordertbl o,product p,user u,order_supplier os where os.fk_order_id=o.order_id and o.fk_product_id=p.product_id and o.fk_email_id=u.user_email_id and os.fk_user_email_id=? ",[fk_user_email_id],callback);
      },
      getsuppliersideorderbyid:function(fk_order_id,callback){
        return db.query("select o.*,p.*,u.*,os.* from ordertbl o,product p,user u,order_supplier os where os.fk_order_id=o.order_id and o.fk_product_id=p.product_id and o.fk_email_id=u.user_email_id and os.fk_order_id=? ",[fk_order_id],callback);
      },
    updatesupplierstatus:function(item,fk_user_email_id,callback)
    {
        return db.query("update order_supplier set order_status=? where fk_user_email_id=?",
        [
            item.order_status,
            fk_user_email_id
        ],
        callback);
    }
  
};
module.exports=supplierside;

