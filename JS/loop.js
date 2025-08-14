console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

console.log("1 to 5");
for(let i =1; i <=5 ; i++){
    console.log(i);
}

console.log("odd numbers");
for(let i=1; i<=15; i=i+2){
    console.log(i);
}

console.log("odd backwards");
for(let i=15; i>=1; i=i-2){
    console.log(i);
}

console.log("even numbers");
for(let i=2; i<=10; i=i+2){
    console.log(i);
}
console.log("even backwards");
for(let i=10; i>=2; i=i-2){
    console.log(i);
}

console.log("table of 5");
for(let i=1; i<=10; i++){
    console.log("5 * " + i + " = " + 5*i);
}

console.log("user input table");
let n = prompt("Write your number");
n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}