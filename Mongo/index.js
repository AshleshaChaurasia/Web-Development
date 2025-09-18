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

//INSERT ONE

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

//INSERT MANY

// User.insertMany([
//     {name:"Manju", email:"manju@gmail.com", age:54},
//     {name:"Sanjay",email:"sanju5@yahoo.in",age:55},
//     {name:"Babulal",email:"babu123@gmail.com",age:69}
// ]).then(res=>{console.log(res)});

//FIND

// User.find({}).then(res=>{console.log(res);});

// User.find({age: {$gt: 50}}).then(data=>{console.log(data[0].name)}).catch(err=>{console.log(err);});

// User.findOne({age: {$gt: 50}}).then(res=>{console.log(res);}).catch(err=>{console.log(err);});

// User.findById("68cbbc3737a418620b032afd").then(res=>{console.log(res);}).catch(err=>{console.log(err);});

//UPDATE

// User.updateOne({name: "Sanjay"}, {age: 57}).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});

// User.updateMany({age: {$gt: 50}},{age:22}).then(res=>{console.log(res);}).catch(err=>{console.log(err);});

// User.findOneAndUpdate({name:"Manju"},{age:25},{new: true}).then(res=>{console.log(res);}).catch(err=>{console.log(err);});

// User.findByIdAndUpdate("68cbbc3737a418620b032afe",{age:25},{new: true}).then((res)=>{console.log(res);}).catch((err)=>{console.log(err)});

//DELETE

// User.deleteOne({name:"Gaurav"}).then((res)=>{console.log(res);}).catch((err)=>{console.log(err)});

// User.deleteMany({age:22 }).then((res)=>{console.log(res);}).catch((err)=>{console.log(err)});

// User.findByIdAndDelete("68cbbc3737a418620b032afd").then((res)=>{console.log(res);}).catch((err)=>{console.log(err)});

User.findOneAndDelete({name: "Manju"}).then((res)=>{console.log(res);}).catch((err)=>{console.log(err)});