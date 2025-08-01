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

// concat method
let primary = ["red","yellow","blue"];
let secondary = ["orange","green","voilet"];
console.log(primary.concat(secondary));
console.log(primary);
console.log(secondary);
let allColors = primary.concat(secondary);
console.log(allColors);

// reverse method
console.log(cars);
console.log(cars.reverse());
console.log(cars);

// slice method
console.log(allColors);
console.log(allColors.slice());
console.log(allColors.slice(2));
console.log(allColors.slice(2,4));
console.log(allColors.slice(-2));
console.log(allColors);

// splice
console.log(allColors);
allColors.splice(4);
console.log(allColors);
allColors.splice(0,1);
console.log(allColors);
allColors.splice(1,0,"black","grey");
console.log(allColors);

// sort
console.log(allColors);
allColors.sort();
console.log(allColors);

let marks = [25,16,4,49,36,9,100];
console.log(marks);
marks.sort();
console.log(marks);

let months2 = ["january","july","march","august"];
months2.splice(0,1);
months2.splice(1,0,"june");
console.log(months2);

let lang = ["c","c++","html","js","python","java","c#","sql"];
console.log(lang.reverse().indexOf("js"));