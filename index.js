const express = require('express');
const dotenv = require('dotenv');
const app = express();
const Dbconnection = require('./dbconnection.js')
const todoroute = require('./routes/todoroute.js')

dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(express.json());
Dbconnection();

app.use('/todos',todoroute)

app.get('/',(req,res)=>{
    res.send("Hello Expresss")
})



app.listen(PORT,()=>{
    console.log(`server up and running at http://localhost:${PORT}`)
})