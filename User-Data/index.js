const http = require("http");

const fs = require("fs");

const server = http.createServer((request, respons) => {


    if (request.url === "/") {

        respons.end(" on Home")

    } else if (request.url === "/contact") {

        respons.end("on Contact");

    } else if (request.url === "/userapi") {

        fs.readFile(`${__dirname}/User-Api/userapi.json`, "utf-8",(err,data)=>{


            console.log(data);
            respons.end(data);
           
        })

   

    } else {

        respons.writeHead(404, { "content-type": "text/" });

        respons.end("Not found");

    }

})

server.listen(8000, "127.0.0.1", () => {


    console.log("working");
})