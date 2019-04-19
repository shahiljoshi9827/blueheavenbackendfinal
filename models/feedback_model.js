var db=require('../dbconnection')
var feedback={
    getfeedbacks(callback)
    {
        return db.query("select f.*,p.* from feedback f,product p where f.fk_product_id=p.product_id",callback);
    },
    getfeedbackbyproductid:function(product_id,callback){
        return db.query("select p.*,f.*,u.* from product p,feedback f,user u where f.fk_product_id=p.product_id and f.fk_email_id=u.user_email_id and product_id=?",[product_id],callback);
    },
    addfeedback:function(item,callback){
        var d=new Date(Date.now());
        return db.query("INSERT INTO feedback(feedback,feedback_date,fk_product_id,fk_email_id) VALUES (?,?,?,?)",
        [
            item.feedback,
            d           ,
            item.fk_product_id,
            item.fk_email_id         
        ],
        callback);
    }

};
module.exports=feedback;

