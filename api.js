const {Client}= require('pg');
const express = require('express');
const cors = require('cors');
const app = express();


const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"mohan123",
    database:"AW_DB"
});

client.connect();

app.use(cors());

app.listen(3300, ()=>{
    console.log("Server is now listening at port 3300");
})

app.get('/products', (req, res)=>{
    client.query(`Select * from products`, (err, result)=>{
        console.log("Printing");
        if(!err){
            console.log(result.rows);
            res.send(result.rows);
        }
        else {
            console.log("Failing");
        }
        client.end;
    });
})
