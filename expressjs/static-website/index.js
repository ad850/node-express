const express = require("express");
const path = require("path")

const about = express();

const port = 4000;


about.use(express.static(path.join(__dirname, '/public')))


about.get("/", (request, response) => {

    response.send("in home page")

})


about.get("/about", (request, response) => {

    response.send([

        {
            id: 1,
            name: "vicky",
        }
    ])

})
about.get("/contact", (request, response) => {

    response.send("in contact page")

})

about.listen(port, () => {

    console.log("working");

})