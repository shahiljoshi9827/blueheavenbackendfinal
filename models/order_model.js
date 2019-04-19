var db=require('../dbconnection');
var orderid=1;
var order={
    getallorder:function(callback)
    {
        return db.query("select o.*,p.* from ordertbl o,product p where o.fk_product_id=p.product_id",callback);
    },
    orderstatus:function(item,callback)
    {
        return db.query("update ordertbl set order_status=? where order_id=?",[item.order_status,item.order_id],callback);
    },
    deleteorder(order_id,callback)
    {
        return db.query("delete from ordertbl where order_id=?",[order_id],callback);
    },
    addorderdetail:function(item,callback)
    {
        var value=[];
         for(let i=0;i<item.length;i++){
            console.log(orderid);
            value[i]=[item[i].order_amount,item[i].order_qty,item[i].fk_product_id,item[i].fk_email_id,item[i].fk_main_order_id];
        }
        console.log(value);

        return db.query("INSERT into ordertbl (order_amount,order_qty,fk_product_id,fk_email_id,fk_main_order_id) VALUES ?",[value],callback);    
        orderid++;
    },
    getorderbyjoin:function(fk_email_id,callback)
    {
        return db.query("select o.*,p.* from ordertbl o,product p where p.product_id=o.fk_product_id and fk_email_id=? ",[fk_email_id],callback);
    }
};
module.exports=order;

