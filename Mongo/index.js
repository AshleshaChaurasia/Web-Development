const mongoose = require("mongoose");

main().then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// let user1 = new User({
//     name: "Ashlesha",
//     email:"ash@yahoo.in",
//     age:23
// });

// let user2 = new User({
//     name: "Gaurav",
//     email:"gauri@gmail.com",
//     age:22
// });

// user1.save();
// user2.save().then((res)=>{console.log(res)}).catch(err=>{console.log(err)});

User.insertMany([
    {name:"Manju", email:"manju@gmail.com", age:54},
    {name:"Sanjay",email:"sanju5@yahoo.in",age:55},
    {name:"Babulal",email:"babu123@gmail.com",age:69}
]).then(res=>{console.log(res)});