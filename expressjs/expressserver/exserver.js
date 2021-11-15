// get - read, post- creat, put-update,delete-delete


const express = require("express");


const app = express();


app.get("/", (request, response) => {


    response.send("you are in Home page ")


})
app.get("/about", (request, response) => {


    response.send("you are in about  page ")


})
app.get("/contact", (request, response) => {


    response.sendFile(__dirname+ "./index.html")


})

app.listen(8000, () => {


    console.log("working suceess");
})