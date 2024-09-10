const express = require('express');


const app = express();
const port = 8081;


app.get("/", (req,res)=> res.send('I am Server'))


app.listen(port,()=>console.log("lets learn"));