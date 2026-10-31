const con=require("./db.js");
const express=require("express");
const app=express();

app.use(express.json());

app.get("/profile",(req,res)=>{
    const query="select * from student";
    const data=con.query(query,(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send(err.message);
        }
        console.log(result);
        res.send(result);
    });
    
});

app.get("/profile/create",(req,res)=>{
    let data=req.query;
    let query="insert into student(name,roll,class) values (?,?,?)";
    con.query(query,Object.values(data),(err,result)=>{
        if(err){
            return res.status(500).send(err.message);
        }
        console.log(result);
        res.send(result);
    })
    
})



app.get("/profile/:id",(req,res)=>{
    let {id}=req.params;
    let query=`select * from student where roll=?`;
    con.query(query,[id],(err,result)=>{
        if(err){
            return res.status(500).send(err.message);
        }
        console.log(result);
        res.send(result);
    })
})

app.get("/profile/:id/edit",(req,res)=>{
    let {roll}=req.query;
    let query="select * from student where roll=?";
    con.query(query,[roll],(err,result)=>{
        if(err){
            res.status(500).send(err.message);
        }
        if(result){
            let query="update student set name=?,class=? where roll=?";
            con.query(query,[req.query.name,req.query.class,req.query.roll],(err,upres)=>{
                if(err){
                    res.status(500).send(err.message);
                }
                console.log(upres);
                res.send("student detail updated");
            });

        }
    })

})

app.get("/profile/:id/delete")




app.listen(3000,()=>{
    console.log("app is listening");
})