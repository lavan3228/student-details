const data = require("../database/db");
const Sequelize=require("sequelize")


const sequelize = new Sequelize(data.DB, data.USER, data.password, {
    host: data.HOST,
    dialect: data.dialect
});

sequelize.authenticate().then((result) => {
    console.log(result);
}) 
.catch((error) => {
    console.log(error)
});

let db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.names = require("./names")(sequelize);

db.sequelize
.sync({force:true})
.then(()=> {
    console.log("created")
    names.bulkCreate =({
        name: "lavan",
        name: "Mani",
        name: "charan"
    })
})

module.exports = db;

