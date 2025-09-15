const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "app",
    password:"1234"
});

let getRandomUser = () => {
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

// console.log(getRandomUser());

// let q = "SHOW TABLES";

// let q = "INSERT INTO user(id, username, email, password) VALUES ?";

// let data = [];
// for(let i = 0; i <= 100; i++){
//     data.push(getRandomUser()); //101 fake users
// }

// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// let users = [["123b", "123_newuserb", "abc@gmail.comb", "abcb"],["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];


app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["count(*)"]);
            res.send(result[0]["count(*)"]);
        });
    }catch(err){
        console.log(err);
        res.send("Somme error in DB");
    }
});

app.listen("8080", () => {
    console.log("Server is listening to port 8080");
});

// try{
//     connection.query(q, [data], (err,result) => {
//         if(err) throw err;
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//         // console.log(result[1]);
//     });
// } catch (err){
//     console.log(err);
// }

// connection.end();