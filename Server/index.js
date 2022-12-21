const express= require('express');
const cors=require('cors');
const mysql = require('mysql2');
const bodyParser=require('body-parser');
const {router} = require('./routes/router');
const app = express();
const db =require('./database/db');


app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',router);
const port =5000;


app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

