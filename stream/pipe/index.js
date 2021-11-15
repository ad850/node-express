const fs = require("fs");

const http = require("http");

const server = http.createServer();


server.on("request", (requ, resp) => {


    const rstream = fs.createReadStream("./User-Api/userapi.json");

    rstream.pipe(resp)

})

server.listen(8000, "127.0.0.1", () => {


    console.log("working");

})






















// server.on("request", (req, resp) => {

//     const rstream = fs.createReadStream("./User-Api/userapi.json");


//     rstream.on("data", (chunkdata) => {

//         resp.end(chunkdata)

//     })
//     rstream.on('end', () => {

//         resp.end();

//     })

// });

// server.listen(8000, "127.0.0.1", () => {

//     console.log("workingg");

// })

// server.on("request", (request, respons) => {

//     const rstream = fs.createReadStream("./User-Api/userapi.json");


//     rstream.on("data", (chankdata) => {


//         respons.end(chankdata);
//     })

//     rstream.on("end", () => {

//         respons.end();

//     });


// })

// server.listen(8000, "127.0.0.1", () => {

//     console.log("workingg");

// })
