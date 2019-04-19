var db=require('../dbconnection');

var supplier={
    
    getallsupplier:function(callback)
    {
        return db.query("select * from supplier ",callback);
    },
    getidbysuppliername:function(supplier_name,callback) {
         return db.query("select supplier_id from supplier where supplier_name=?",[supplier_name],callback);
    },
    deletesupplier(supplier_id,callback)
     {
         return db.query("delete from supplier where supplier_id=?",[supplier_id],callback);
     },

     deletesupplier:function(user_email_id,callback){
        return db.query("delete from user where user_email_id=?",
        [
            user_email_id
        ],
        callback);
    },  
     addsupplier:function(item,callback){
        
        return db.query("insert into user values(?,?,?,?,?,?,?,?)",[item.user_email_id,item.user_name,item.user_mobile_no,item.user_gender,item.user_dob.substring(0,10),item.user_address,item.user_password,"Supplier"],callback);
    },
     addsupplier:function(item,callback)
    {
        console.log(item.supplier_name);
        console.log(item.supplier_contact);

        

        return db.query("insert into user (user_email_id,user_name,user_mobile_no,user_gender,user_dob,user_address,user_password,type) values(?,?,?,?,?,?,?,?)",[item.user_email_id,item.user_name,item.user_mobile_no,item.user_gender,item.user_dob,item.user_address,item.user_password,item.type],callback);
    },

    updatesupplier:function(item,user_email_id,callback){
        return db.query("update user set user_name=?, user_mobile_no=?, user_gender=?,user_dob=?,user_address=? where user_email_id=?",
        [
            item.user_name,
            item.user_mobile_no,
            item.user_gender,
            item.user_dob,
            item.user_address,
            user_email_id
            
        ],
        callback);
    },

    updatesupplier:function(item,supplier_id,callback)
    {
            return db.query("update supplier set supplier_name=?,supplier_contact=? where supplier_id=?",
            [
             item.supplier_name,
             item.supplier_contact,
             supplier_id   
            ],
            callback        
            );
    },
    getalluser:function(type,callback){
        return db.query("select * from user where type=?",[type],callback);
    },
    
    supplierorderstatus:function(item,callback)
    {
        console.log(item.fk_order_status);   
        return db.query("update supplier set fk_order_status=? where supplier_id=?",[item.fk_order_status,item.supplier_id],callback);
    },
    deleteorder(order_id,callback)
    {
        return db.query("delete from ordertbl where order_id=?",[order_id],callback);
    }
    
    
  
};
module.exports=supplier;

