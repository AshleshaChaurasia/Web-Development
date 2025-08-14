// Favourite movie
let favMovie = "manju";
let user = prompt("Guess name");
while(user != favMovie && user != "quit"){
    console.log("Incorrect! Try again :)");
    let input = prompt("Guess again");
    user = input;
}