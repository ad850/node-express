//to play with dynamic data then use temple engine :- pug,*handlebars/**

//to use handle bars we use HBS  engine

// file located in views is must with  .hbs or index.hbs 

// if file need dynamic data drop into views and with .hbs ext

const express = require("express");

const app = express();
const path = require("path");



//app.use(express.static(path.join("./public")))

app.set("view engine", "hbs")

app.get("/", (req, resp) => {

    resp.render("index.hbs", {

        name: "aditya",
    })


})
app.get("/about", (req, resp) => {

    resp.send("about")


})
app.get("/conta", (req, resp) => {

    resp.send("conta")


})

app.listen(8000, () => {

    console.log("successfull");
})