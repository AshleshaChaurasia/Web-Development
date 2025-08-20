let user = prompt("Enter the max value");
let num = Math.floor(Math.random()*user) + 1;
let guess = prompt("Guess the number");
while(true){
    if(guess=="quit"){
        break;
    }
    else if(guess==num){
        console.log("You guessed it!");
        break;
    }
    else if(guess>num){
        guess = prompt("Your guess is larger,  guess smaller");
        // console.log("You are guessing a bit larger number,Guess small!");
        // console.log("Try again!!");
        // guess = prompt("Guess the number again");
        // break;
    }
    else{
        guess = prompt("Your guess is smaller, guess larger");
        // console.log("You are guessing a bit smaller number,Guess larger");
        // break;
    }
    // else{
    //     console.log("Try again!!");
    //     guess = prompt("Guess the number again");
    // }
}