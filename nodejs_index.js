const express=require('express');
const app=express();

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("server is started");
})

//var http = require('http');
//const data=require('./data');

//http.createServer(function (req, res)
// {
 // res.writeHead(200, {'Content-Type': 'text/plain'});
 // res.write(JSON.stringify(data));
//res.write(JSON.stringify({name:"PVG",email:"abc@gmail.com"}));
 // res.end('Hello World!');
//}).listen(8080); 