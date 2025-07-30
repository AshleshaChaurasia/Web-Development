// Question - 1
let num = 50;
if(num%10 == 0){
    console.log("good");
}else{
    console.log('bad')
}

// Question - 2
let name = prompt("Enter your name :");
let age = prompt("Enter your age :");
let msg = `${name} is ${age} years old!`;
alert(msg);

// Question - 3
let quater = 3;
switch(quater){
    case 1 :
        console.log('January,February,March');
        break;
    case 2 :
        console.log('April,May,June');
        break;
    case 3 :
        console.log('July,August,September');
        break;
    case 4 :
        console.log('October,November,December');
        break;
    default:
        console.log('Invalid');
}

// Question - 4
let str = 'Ashlesha';
if((str[0] == 'A')||(str[0] == 'a')&&(str.length>5)){
    console.log('Golden string');
}else{
    console.log('Not a golden string')
}

// Question - 5
let num1 = 56;
let num2 = 49;
let num3 = 89;
if((num1>num2)&&(num1>num3)){
    console.log(num1);
}
else if((num2>num1)&&(num2>num3)){
    console.log(num2);
}
else if((num3>num1)&&num3>num2){
    console.log(num3);
}

// Question - 6
let number1 = 256;
let number2 = 232266;
if((number1[number1.length-1]) == (number2[number2.length-1])){
    console.log('They have same last digit!');
}
else{
    console.log('Different last digit!')
}