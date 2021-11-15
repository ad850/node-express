const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request", (requ, resp) => {


    const istream = fs.createReadStream("./User-Api/userapi.json");


    istream.on("data", (chankdata) => {


        resp.end(chankdata);
    })

    istream.on('end', () => {


        resp.end();
    })
    istream.on('error', (error) => {
        console.log(error);

        resp.end("file not found");
    })
})

server.listen(8000, "127.0.0.1", (err) => {


    console.log(err);

})





