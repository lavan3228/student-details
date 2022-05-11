const mysql = require("mysql");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123",
    database : "practise"
});

con.connect((err)=>{
    if (err) throw err;
});



app.get("/students/" , (req,res)=>{
    const sql = "SELECT * FROM studentDetails;";
    con.query(sql , (err,result,fields)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.post("/students/" , (req,res)=>{
    const {id,name,gender,age} = req.body;
    
    const sql = `INSERT INTO studentDetails (id,name,gender,age) VALUES (${id}, "${name}","${gender}",${age});`;
    
    con.query(sql , (err,result,fields)=>{
        if(err) throw err;
        res.send("Inserted successfully");
    });
});

app.put("/students/:id" , (req,res)=>{
    const {id} = req.params;
    const {age} = req.body;
    const sql = `UPDATE studentDetails SET age = ${age} WHERE id = ${id};`;
    con.query(sql,(err,result,fields)=>{
        if(err) throw err;
        res.send("Updated");
    });
});

app.delete("/students/:id" , (req,res)=>{
    const {id} = req.params;
    const sql = `DELETE from studentDetails WHERE id = ${id};`;
    con.query(sql,(err,result,fields)=>{
        if(err) throw err;
        res.send("deleted");
    });
});