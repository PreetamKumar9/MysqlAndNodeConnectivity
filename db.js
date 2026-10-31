const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"preet@787058",
    database:"college"
});
connection.connect((err)=>{
    if(err){
        console.log(err,"not connected");
        return;
    }
    console.log("db is connected");
})
module.exports=connection;