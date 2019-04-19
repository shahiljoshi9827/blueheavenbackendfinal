var db=require('../dbconnection');

var confirm={
    getalldetailsofbill:function(fk_email_id,bill_id,fk_main_order_id,callback)
    {
        return db.query("SELECT o.*,r.*,u.*,p.*,c.*,b.* FROM bill b,ordertbl o,mainorder_tbl r,user u,payment p,product c  WHERE  o.fk_main_order_id=r.mainorder_id and r.mainorder_id=p.fk_mainorder_id and u.user_email_id=r.fk_email_id and o.fk_product_id=c.product_id and r.fk_email_id=? and b.Bill_id=? and o.fk_main_order_id=?",[fk_email_id,bill_id,fk_main_order_id],callback);
    }
};
module.exports=confirm;

