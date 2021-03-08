require('dotenv').config()
const express= require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const app=express()


app.use(helmet());
app.use(morgan('combined'))

app.get('/',(req,res)=>{
    res.send("hello world!")
})

const port = process.env.PORT
app.listen(port,() => {
    console.log('Started listening on:', port)   
})