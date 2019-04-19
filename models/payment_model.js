var db=require('../dbconnection')

var payment={
    getallpayment:function(callback){
        return db.query("select * from payment ",callback)
    },
    addpayment:function(item,callback)
    {
            var d=new Date(Date.now());
        return db.query("insert into payment (payment_date,amount,payment_mode,fk_mainorder_id,fk_email_id) values (?,?,?,?,?)",
        [
            d,
            item.amount,
            item.payment_mode,
            item.fk_mainorder_id,
            item.fk_email_id
        ],
        callback)
    }

}
module.exports=payment;