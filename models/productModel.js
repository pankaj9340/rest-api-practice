
const {DataTypes}=require('sequelize')
const db =require('../models/index.js')
    const Product=db.Sequelize.define("product",{
        tittle:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER,
        },
        description:{
            type:DataTypes.TEXT
        },
        published:{
            type:DataTypes.BOOLEAN
        }
    },{
        
    });


    module.exports = Product;
