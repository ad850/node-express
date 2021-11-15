// if name change views to templetes
//templet engine

const express = require("express");
const path = require("path")



const app = express();

const templatePath = path.join(__dirname,"./templates")

app.set("view engine", "hbs")
app.set("views", templatePath)

console.log(templatePath);


app.get("/", (req, resp) => {


    resp.render("index.hbs", {


        name: "aditya",
        place: "kota"
    })
})


app.listen(8000, () => {


    console.log("working");
})