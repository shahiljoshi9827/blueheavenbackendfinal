var db=require('../dbconnection');
var ordersupplier={
   
addordersupplier:function(item,callback)
{
       
return db.query("insert into order_supplier (fk_order_id,fk_supplier_id,order_status) values(?,?,?)",[item.fk_order_id,item.fk_supplier_id,item.order_status],callback);
},
    
  
};
module.exports=ordersupplier;
