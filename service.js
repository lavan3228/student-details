const mysql = require("mysql");
const express = require("express");
const res = require("express/lib/response");
const app = express()

app.use(express.json());

app.listen(4000, () => {
    console.log("Server running Successfully http://localhost:4000");
});

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123",
    database:"new_task"
});

con.connect((error) => {
    if (error) throw error;
    console.log("table created")
});

app.get("/employee", async (req, res)=> {
    const sql = "SELECT * from company;";
    await con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post("/employee", async (req, res)=> {
    const {id, employeeName, age, gender, rating} = req.body;

    const sql = `INSERT INTO company (id, employeeName, age, gender, rating) VALUES(${id}, "${employeeName}", ${age},"${gender}", ${rating} );`;
   
    await con.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Inserted Successfully");
    });
});