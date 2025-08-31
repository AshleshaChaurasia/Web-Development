const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port : ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request recieved");
//     // res.send("This is a basic response!");
//     // res.send({
//     //     name:"apple",
//     //     color:"red"
//     // })
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });

app.get("/",(req, res) => {
    res.send("You contacted root path");
});

// app.get("/apple", (req, res)=> {
//     res.send("You contacted apple path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// });

// // app.get( '*' , (req, res) => {
// //     res.send("This path does not exist");
// // });

// app.post("/",(req, res) => {
//     res.send("You sent a post request to root path");
// });

// app.get("/:username", (req,res) => {
//     let {username} = req.params;
//     console.dir(req.params);
//     res.send(`This account belongs to ${username}`);
// });

app.get("/:username/:id", (req,res) => {
    let {username,id} = req.params;
    console.dir(req.params);
    // res.send(`This account belongs to ${username} and id is ${id}`);
    let htmlStr = `<h1>This account belongs to ${username} and id is ${id}</h1>`;
    res.send(htmlStr);
});

app.get("/search",(req,res) => {
    let {q} = req.query;
    if(!q){
        res.send("Nothing searched");
    }
    res.send(`These are the results for query : ${q}`);
});