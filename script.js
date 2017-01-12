// create secret number
var secretNumber = 7;

//ask user for a guess

var guess = prompt ("Guess a number");

//check if guess is correct

if (Number(guess) === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}


//check if guess is higher

else if (Number(guess) > secretNumber) {
	alert ("Too high. Guess Again!");
}


//check if guess is lower

else if (Number(guess) < secretNumber) {
	alert("Too low. Guess Again!");
}






