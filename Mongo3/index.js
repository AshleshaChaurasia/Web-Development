const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
    .then(() => {
        console.log("Connetion successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat({
    from: "neha",
    to: "priya",
    msg:"Kya kr rhi h bhn",
    created_at: new Date()
})

chat1.save().then((res) => {
    console.log(res);
})

app.get("/", (req, res) => {
    res.send("Root is working");
});

app.listen(8080, ()=>{
    console.log("Server is working on port 8080");
});