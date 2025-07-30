// Traffice light
let light = 'Red';
if(light == "Red"){
    console.log("Stop!");
}
else if(light == "Yellow"){
    console.log("Slow down!");
}
else if(light == "Green"){
    console.log("Go!");
}
else{
    console.log("Traffic light is not working!");
}

// Popcorn price
let size = 'XS';
if(size == 'XL'){
    console.log("Price is Rs. 250");
}
else if(size == 'L'){
    console.log("Price is Rs. 200");
}
else if(size == 'M'){
    console.log("Price is Rs. 100");
}
else if(size == 'S'){
    console.log('Price is Rs. 50');
}
else{
    console.log("Size is not applicable!")
}

// String good or not
let str = 'apple';
if((str[0]=='a')&&(str.length>3)){
    console.log("good string");
}else{
    console.log('not a good string');
}

//Day
let day = 1;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}