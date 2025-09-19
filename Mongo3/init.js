const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allChats = [
    {
        from:"ash",
        to:"gaurav",
        msg:"Tum mujhe pampu kro",
        created_at: new Date()
    },
    {
        from:"aas",
        to:"sourabh",
        msg:"hello,what doing",
        created_at: new Date()
    },
    {
        from:"manju",
        to:"gunnnu",
        msg:"Mera pyaara baccha",
        created_at: new Date()
    },
    {
        from:"gudiya",
        to:"bittu",
        msg:"Bhaiya pagal hai",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);
