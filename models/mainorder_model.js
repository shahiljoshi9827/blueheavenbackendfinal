var db=require('../dbconnection');
var order={
    getAllmainOrder:function(callback){
        return db.query("select * from  mainorder_tbl",callback);
    },
    deleteAllmainOrder:function(item,callback){
        console.log(item);
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].order_id;
           
        }
        console.log(delarr);
        db.query("delete from ordertbl where fk_main_order_id=?",[delarr]);
        return db.query("delete from mainorder_tbl where mainorder_id in (?)",[delarr],callback);
        
    },
    deleteOrder:function(id,callback){
        db.query("delete from ordertbl where fk_main_order_id=?",[id]);
        return db.query("delete from mainorder_tbl where mainorder_id=?",[id],callback);
        console.log(id);    
    },
     addOrder:function(item,callback){
        var d=new Date(Date.now());
        return db.query("insert into mainorder_tbl(fk_email_id,mainorder_amount,mainorder_date) values(?,?,?)",[item.fk_email_id,item.mainorder_amount,d],callback);
    }
};
module.exports=order;