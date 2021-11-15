const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/ad")
    .then(() => console.log("working......"))
    .catch((err) => console.log(err))


const playlistSchema = new mongoose.Schema({

    name: String,
    cctyle: String,
    author: String,
})



const Playlist = new mongoose.model("Playlist", playlistSchema);



const reactPlaylist = new Playlist({

    name: "react js ",
    cctyle: "end",
    author: "aditya"
})


reactPlaylist.save();