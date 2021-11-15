const fs = require("fs");

const express = require("express");
const path = require("path");

const app = express();

//app.use(express.static(fpath));

const templetpath= path.join(__dirname,"./templates")

app.set("view engine", "hbs")
app.set("views", templetpath)

app.get("/", (req, resp) => {


    resp.render("index.hbs",{

        name:"aditya"
    });

})

app.get("/about", (req, resp) => {


    resp.send("about")

})

app.listen(8000, () => {

    console.log("lisning....");
    console.log(templetpath);
 
})