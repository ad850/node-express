const http = require("http");

const fs = require("fs");


const server = http.createServer();


server.on("request", (requ, resp) => {


    fs.readFile("User-Api/userapi.json", "utf-8", (err, data) => {

        if (err) return console.log(err);
        resp.end(data)

    })

    const rstream = fs.createReadStream("User-Api/userapi.json");

    rstream.on('data', (chunkdata) => {

        resp.write(chunkdata);

    });
    rstream.on('end', () => {

        resp.end();
    });

    rstream.on('error', (error) => {

        console.log(error);
        resp.end("file not found")
    })

})

server.listen(8000, "127.0.0.1", () => {


    console.log("successfull");
})