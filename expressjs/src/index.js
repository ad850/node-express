// if name change views to templetes
//templet engine

const express = require("express");
const path = require("path")

const hbs = require("hbs");



const app = express();

const templatePath = path.join(__dirname, "../templates/views")

const partialpath = path.join(__dirname, "../templates/partials")


app.set("view engine", "hbs")
app.set("views", templatePath)

hbs.registerPartials(partialpath)

console.log(templatePath);


app.get("/", (req, resp) => {


    resp.render("index.hbs")
})
app.get("/about", (req, resp) => {


    resp.render("about.hbs");
})
app.get("/about/*", (req, resp) => {

    resp.render("404", {

        errorcomment: "oops page not found"

    });
})

app.get("*", (req, resp) => {

    resp.render("404", {

        errorcomment: "oops page not found"

    });
})

app.listen(8000, () => {


    console.log("working");
})
