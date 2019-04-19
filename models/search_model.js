var db=require('../dbconnection')

var search={
    getsearchProduct:function(word,callback){
        var name='%'+word+'%';
        return db.query("select * from product where product_name like ?",[name],callback);
    },
}

module.exports=search;

