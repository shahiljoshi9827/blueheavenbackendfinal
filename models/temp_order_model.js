var db=require('../dbconnection');
var temp_order={
    getalltemporder:function(callback)
    { return db.query("select * from temp_order_tbl",callback)
    },
    addtemporder:function(item,callback)
    {
        return db.query("insert into temp_order_tbl (order_amount,order_qty,fk_product_id,fk_email_id) values(?,?,?,?)",
        [
            item.order_amount,
            item.order_qty,
            item.fk_product_id,
            item.fk_email_id
        ],
        callback
        );
    },
    getorderbyjoin:function(fk_email_id,callback){
        return db.query('select p.*,o.* from product p,temp_order_tbl o where p.product_id=o.fk_product_id and fk_email_id=?',[fk_email_id],callback)
    },
    deletetemporder:function(temp_order_id,callback)
    {
        return db.query("delete from temp_order_tbl where temp_order_id=?",[temp_order_id],callback);
    },  
    deletealltemporder:function(item,callback)
    {
        var delarr=[];
        console.log(item);
        for (let i=0;i<item.length;i++) 
        {
        
            delarr[i]=item[i].temp_order_id;         
        }
        console.log(delarr);
        return db.query("delete from temp_order_tbl where temp_order_id in (?)",[delarr],callback);
    },
    updatetemporder:function(item,temp_order_id,callback){
        return db.query("update temp_order_tbl set order_amount=?,order_qty=? where temp_order_id=?",
        [
            item.order_amount,
            item.order_qty,
            temp_order_id
        ]
        ,callback);
    },
    checkRepeatProduct:function(item,callback){
        console.log(item);
        console.log(item.fk_email_id);
        console.log(item.fk_product_id);
        return db.query("select * from temp_order_tbl where fk_email_id=? AND fk_product_id=?",[item.fk_email_id,item.fk_product_id],callback);
     }


};
module.exports=temp_order;

    