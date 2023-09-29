const { where } = require('sequelize')
const db=require('../models')

const Product = db.products

////// 1) create product

const addProduct = async (req,res)=>{
 let info ={
    tittle:req.body.tittle,
    price:req.body.price,
    description :req.body.description,
    published:req.body.published ? req.body.published:false
 }

 const product= await Product.create(info)
 res.status(200).send(product)
 console.log(product)

}

//// 2) get all products

const getAllProduct = async (req,res) =>{
    let products=await Product.findAll({})
    res.status(200).send(products)
}

// 3) get single product 

const getOneProduct = async (req,res)=>{
    let id= req.params.id
    let product = await Product.findOne({where:{id :id}})
    res.status(200).send(product)
}

/// 4) update product 

const updateProduct =async (req,res)=>{
    let id = req.params.id
    let product = await Product.update(req.body,{where:{id : id}})
    res.status(200).send(product)
}

//// 5) delete product

const deleteProduct=async (req,res)=>{
    let id = req.params.id
    await Product.destroy({where:{id:id}})
    res.status(200).send('product is deleted')
}

module.exports={
    addProduct,
    deleteProduct,
    updateProduct,
    getAllProduct,
    getOneProduct
}