var db=require('../dbconnection')

var track={
    
    trackorder:function(mainorder_id,fk_email_id,callback)
    {
        return db.query("select * from mainorder_tbl where mainorder_id=? and fk_email_id =?",[mainorder_id,fk_email_id],callback)
    }
}
module.exports=track;