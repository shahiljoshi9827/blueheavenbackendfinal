var db=require('../dbconnection')
var brand={
    getallbrand(callback)
    {
        return db.query("select * from brand",callback);
    },
    addbrand:function(item,callback)
    {
        return db.query("insert into brand (brand_name) values(?)",[item.brand_name],callback);
    },
     
    updateBrand:function(item,brand_id,callback)
    {
            return db.query("update  brand set brand_name=? where brand_id=?",
            [
             item.brand_name,
             brand_id     
            ],
            callback        
            );
    },
    
      
     deletebrand(brand_id,callback)
     {
         return db.query("delete from brand where brand_id=?",[brand_id],callback);
     },
    deleteallProduct:function(item,callback)
    {
        var delarr=[];
        console.log(item);
        for (let i=0;i<item.length;i++) 
        {
        
            delarr[i]=item[i].brand_id;         
        }
        console.log(delarr);
        return db.query("delete from brand where brand_id in (?)",[delarr],callback);
    },
    ProductBrandjoin:function(brand_name,callback){
        console.log(brand_name);
        return db.query('select b.*,p.* from brand b,product p where b.brand_id = p.fk_brand_id and b.brand_name=?',
        [
            brand_name 
        ],
        callback
    );}  
};
module.exports=brand;
    
