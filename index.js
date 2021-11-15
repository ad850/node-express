const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, resp) => {

    // resp.end("working");

    if (req.url === "/") {

        resp.end("Home")
    } else if (req.url === "/about") {


        fs.readFile(path.join(__dirname,"/expressjs/public/index.html"),"utf-8",(err,data)=>{

            resp.end(data)
            console.log(err);
         
        })

    } else {

        resp.writeHead(404, "contenttype: html");
        resp.end("404 not found");
    }


})


server.listen(8000, () => {

    console.log("listning....");
})