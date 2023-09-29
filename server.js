const express=require('express')
const app =express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.json({message :'hello from api'})
})
//router

const router=require('./routes/productRoutes.js')

app.use('/api/products',router
)
//port 

const PORT =3000;

app.listen(PORT,()=>{
    console.log(`port is running at ${PORT}`)
})