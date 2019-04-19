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
    ProductBrandjoin:function(brand_name,callback){
        return db.query('select b.*,p.* from brand b,product p where b.brand_id = p.fk_brand_id and b.brand_name=?',
        [
            brand_name 
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
    },
    sortbyhighprice:function(callback)
    {
        return db.query("select * FROM product ORDER BY product_price desc LIMIT 10",callback);
    },
    topproductbyname:function(callback)
    {
        return db.query("select *, count(product_name) as attended from product group by product_name order by 2 desc limit 10",callback);
    },
    sortbylowprice:function(callback)
    {
        return db.query("select * FROM product ORDER BY product_price asc LIMIT 10",callback);
    },
    sortingbyrnage:function(item,callback)
    {
        return db.query("select * from product where product_price > ? and product_price < ?",[item.start,item.end],callback)
    },
    similerproduct:function(brand_id,product_id,callback)
    {
        return db.query("select * from product where fk_brand_id=? and product_id NOT IN (?)",[brand_id,product_id],callback)
    },
    pastorder:function(fk_email_id,callback)
    {
        return db.query("select b.*,d.*,p.* from bill b,bill_details d,product p where b.Bill_id=d.fk_bill_id and d.fk_product_id=p.product_id 	and b.fk_email_id=?",[fk_email_id],callback);
    }
}
module.exports=product;