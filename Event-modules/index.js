const EventEmitter = require("events");


const event = new EventEmitter();


event.on("name", (name, sname) => {


    console.log(`working correctly ${name} ${sname}  `);
})

event.emit("name", 200, "sharma");