let fruits = ["Apple","Mango","Banana","Orange"];
for(fruit of fruits){
    console.log(fruit);
}

// nested for of loop
let heros = [["Ironman","Spiderman","Thor"],["Superman","Splash","Wonder woman"]];
for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}