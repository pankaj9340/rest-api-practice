const dbconfig =require('../config/dbconfig.js');

const {Sequelize,Datatypes}=require('sequelize');

const sequelize= new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host:dbconfig.HOST,
        dialect:dbconfig.dialect
}
)

sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch((err)=>{
    console.log('error',err)
})

const db= {}

db.Sequelize= Sequelize
db.sequelize=sequelize

db.products = require ('./productModel')(sequelize,Datatypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes sync is done')
})

module.exports=db