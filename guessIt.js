

"use strict"
var delay = 1100

setTimeout(function(){

	
function guessIt (secretNum, yourGuess) {
 	
var secret = Math.random () * 10;
var secretNum = Math.floor (secret) + 1;
var counter = 0;



while (counter < 3) {
	var yourGuess = Number(prompt("Guess a number between 1 and 10"));

	
	if (secretNum < yourGuess) 
		{alert ("Too high! Guess Again");
		}
	if (secretNum > yourGuess) 
		{alert ("Too low! Guess Again");
		}

		counter++;

	 if (counter === 3 && secretNum !== yourGuess) {
		alert ("Game Over! Refresh Page to try again.")	
 		}

   	if (secretNum === yourGuess) 
		{alert("Good Guess! You are right!");
		}


 }

 	

}

 	

guessIt ()

}, delay) ;


