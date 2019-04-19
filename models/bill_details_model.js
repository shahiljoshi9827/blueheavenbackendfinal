var db=require('../dbconnection');

var billdetails={
    // getallorder:function(callback)
    // {
    //     return db.query("select o.*,p.* from ordertbl o,product p where o.fk_product_id=p.product_id",callback);
    // },
    // orderstatus:function(item,callback)
    // {
    //     return db.query("update ordertbl set order_status=? where order_id=?",[item.order_status,item.order_id],callback);
    // },
    // deleteorder(order_id,callback)
    // {
    //     return db.query("delete from ordertbl where order_id=?",[order_id],callback);
    // },
    addbilldetails:function(item,callback)
    {
        var value=[];
         for(let i=0;i<item.length;i++){
            
            value[i]=[item[i].amount,item[i].qty,item[i].fk_bill_id,item[i].fk_product_id,item[i].fk_email_id];
        }
        console.log(value);

        return db.query("INSERT into bill_details(amount,qty,fk_bill_id,fk_product_id,fk_email_id) VALUES ?",[value],callback);    
      
    }
    // getorderbyjoin:function(fk_email_id,callback)
    // {
    //     return db.query("select o.*,p.* from ordertbl o,product p where p.product_id=o.fk_product_id and fk_email_id=? ",[fk_email_id],callback);
    // }
};
module.exports=billdetails;

