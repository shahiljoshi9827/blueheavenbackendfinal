var db=require('../dbconnection')

var product={
    getallProduct:function(callback){
        return db.query("select p.*,b.* from product p,brand b where p.fk_brand_id=b.brand_id",callback);
    },
    addProduct:function(item,filename,callback)
    {
        console.log(item.product_name);
        console.log(filename);
        console.log(item.product_discription);
        console.log(item.product_qty);
        console.log(item.fk_brand_id);
        return db.query("insert into product (product_name,product_image,product_discription,product_price,product_qty,fk_brand_id) values(?,?,?,?,?,?)",[item.product_name,filename,item.product_discription,item.product_price,item.product_qty,item.fk_brand_id],callback);
    },
    updateProduct:function(item,product_id,callback)
    {
            return db.query("update product set product_name=?,product_discription=?,product_price=?,product_qty=? where product_id=?",
            [
             item.product_name,
             item.product_discription,
             item.product_price,
             item.product_qty,
             product_id   
            ],
            callback        
            );
    },
    
        updateProductwithimage:function(item,filename,callback)
    {
            return db.query("update product set product_name=?,product_image=?,product_discription=?,product_price=?,product_qty=? where product_id=?",
            [
             item.product_name,
             filename,
             item.product_discription,
             item.product_price,
             item.product_qty,
             item.product_id   
            ],
            callback        
            );
    },
    ProductBrandjoin:function(product_name,callback){
        return db.query('select b.*,p.* from brand b,product p where b.brand_id = p.fk_brand_id and b.brand_name=?',
        [
           product_name 
        ],
        callback
    );
    },
    getProductById:function(product_id,callback){
     return db.query('select * from product where product_id=?',[product_id],callback);
     },
     deleteproduct(product_id,callback)
     {
         return db.query("delete from product where product_id=?",[product_id],callback);
     },
    deleteallProduct:function(item,callback)
    {
        var delarr=[];
        console.log(item);
        for (let i=0;i<item.length;i++) 
        {
        
            delarr[i]=item[i].product_id;         
        }
        console.log(delarr);
        return db.query("delete from product where product_id in (?)",[delarr],callback);
    }

   
}
module.exports=product;