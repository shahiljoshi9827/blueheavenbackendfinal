var db=require('../dbconnection');
var bill={
    getbill:function(callback){
        return db.query("select * from  bill",callback);
    },
    deleteAllbill:function(item,callback){
        console.log(item);
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].Bill_id;
           
        }
        console.log(delarr);
        db.query("delete from ordertbl where fk_bill_id=?",[delarr]);
        return db.query("delete from bill where Bill_id in (?)",[delarr],callback);
        
    },
    deleteBill:function(id,callback){
        db.query("delete from ordertbl where fk_bill_id=?",[id]);
        return db.query("delete from bill where Bill_id=?",[id],callback);
        console.log(id);    
    },
    addbill:function(item,callback){
        var d=new Date(Date.now());
        return db.query("insert into bill(Bill_amount,Bill_date,fk_email_id) values(?,?,?)",[item.Bill_amount,d,item.fk_email_id],callback);
    }
};
module.exports=bill;