let cars = ["audi","bmw","maruti"];
cars.push("xuv");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("swift");
console.log(cars);
cars.shift();
console.log(cars);

// change array
let months = ["january","july","march","august"];
months.shift();
console.log(months);
months.shift();
console.log(months);
months.unshift("june");
console.log(months);
months.unshift("july");
console.log(months);

// indexOf and includes method
console.log(months.indexOf("july"));
console.log(months.indexOf("July"));
console.log(months.indexOf("april"));

console.log(cars.includes("bmw"));
console.log(cars.includes("Bmw"));
console.log(cars.includes("thar"));