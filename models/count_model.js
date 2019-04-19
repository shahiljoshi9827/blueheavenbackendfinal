var db=require('../dbconnection')
var count={
    getusercount(callback)
    {
        return db.query("SELECT count( * ) as  total_record FROM user",callback);
    },
    getfeedbackcount(callback)
    {
        return db.query("SELECT count( * ) as  total_record FROM feedback ",callback);
    }
   
  
};
module.exports=count;

