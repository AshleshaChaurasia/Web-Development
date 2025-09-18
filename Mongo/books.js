const mongoose = require("mongoose");

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>{console.log(err);});

    async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
    }

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min: 1,
    },
    discount:{
        type: Number,
        default: 0,
    },
    genre:[String],
    category:{
        type: String,
        enum: ["fiction","non-fiction"],
    },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title:"Room no 105",
    author: "Someone",
    price: 650,
    genre: ["romance","love","suspense"],
    category:"fiction",
});

book1.save().then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});