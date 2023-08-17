var  http= require("http");
var fs =require("fs");
const app = express();
var express = require("express");

// http using server
http.createServer(function(req,res){
    fs.readFile("test.html",function(err , data){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8180);

// express using server
app.get('/',function(req,res){
    fs.readFile("test.html",function(err , data){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        return res.end();
    });
})
app.listen(3000);