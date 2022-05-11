const { Sequelize } = require("sequelize");

module.exports = (Sequelize) => {
    const Names = (Sequelize.define("names"), {
        id: {
            type : Sequelize. INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: Sequelize. STRING,
            allowNull: false
        }
    }) 
}

/*const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123",
    database : "practise"
});

con.connect((err)=>{
    if (err) throw err;
    con.query("select * from studentDetails;" , (err,result,fields)=>{
        if(err) throw err;
        console.log(result);
    });
});

