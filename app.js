const express = require('express');
const path = require('path');
const config = require('./config');

// 
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world')
})


async function Start(){
    app.listen(config.PORT,(err)=>console.log(err||`Server is start ${config.PORT}`))
}

Start()