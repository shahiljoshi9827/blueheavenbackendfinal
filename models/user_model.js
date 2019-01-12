var db=require('../dbconnection');
var user={
    getalluser:function(callback){
        return db.query("select * from user",callback);
    },
    getalluserbyid:function(user_email_id,callback){
        return db.query("select * from user where user_email_id=?",[user_email_id],callback);
    },
    login:function(item,callback){
        return db.query(
            "select * from user where user_email_id=? and user_password=?",
            [
                item.user_email_id,
                item.user_password
            ],
            callback
        );
    },
    signup:function(item,callback){
        
        return db.query("insert into user values(?,?,?,?,?,?,?,?,?,?,?,?)",[item.user_email_id,item.user_name,item.user_mobile_no,item.user_gender,item.user_dob.substring(0,10),item.user_password,item.user_address,"User",item.data_inserted_on,item.data_inserted_by,item.data_updated_on, item.data_updated_by],callback);
    },
    forgetpassword:function(user_email_id,callback){
        return db.query("SELECT user_password FROM user WHERE user_email_id = ?",[user_email_id],callback);
    },
    editprofile:function(item,user_email_id,callback){
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
        deleteprofile:function(user_email_id,callback){
            return db.query("delete from user where user_email_id=?",
            [
                user_email_id
            ],
            callback);

        },
        deleteall:function(item,callback){
            var delarr=[];
            for(let i=0;i<item.length;i++)
            {
                delarr[i]=item[i].user_email_id;
            }
            return db.query("delete from user where user_email_id in (?)",[delarr],callback);

        }
}

module.exports=user;                                                                            