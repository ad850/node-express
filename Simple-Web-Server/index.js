//1. require("http")
//2. include http.createServer() method include request and response para callback
// server.listen(port num,"127.0.0.1",()=>{})

// const http = require("http")


// const server = http.createServer((request, respons) => {

//     if (request.url === "/") {
//         respons.end("hello working")
//     } else if (request.url === "/about") {

//         respons.end("you are at about")

//     } else if (request.url === "/shopping") {

//         respons.end("you are at shoping")

//     } else if (request.url === "/Home") {

//         respons.end("you are at Home")

//     } else {
//         respons.writeHead(404, { "Content-type": "text/html" });
//         respons.end("<h1>404 not exist<h1>")
//     }
// });


// server.listen(8000, "127.0.0.1", () => {

//     console.log("successfull");
// })



const http = require("http");

const server = http.createServer((request, respons) => {

    if (request.url === "/") {

        respons.end("This is home")

    } else if (request.url === "/about") {


        respons.end("This is About")

    } else if (request.url === "/contact") {


        respons.end("This is contact");

    } else {

        respons.writeHead(404, { "content-type": " text/html" });

        respons.end("404 Dont exist")

    }

})

server.listen(8000, "127.0.0.1", () => {


    console.log("working");
})