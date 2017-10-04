// set list of words
var hangWords = ["rifle", "horse", "revolver", "outlaw", "gunslinger", "saddle", "poncho", "treasure", "reward", "spurs", "boots", "noose", "horseshoe"];

// set current word

var currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];

// var hangLetters = currentWord.split("");



//set variable initial states
var underScore = [];
var rightWord = [];
var wrongWord = [];
var guessLeft = 12;
var hangDisplayString = "";
var hangDisplayFinal = "";
var hangDisplayString = "";
var numWins = 0;
var userGuess = "";
var userSpace = "";
var hangSpaces = "";

// convert the words to underscores

 var hangSwap = function(hangWords){
 	hangSpaces = currentWord;
 	underScore = [];
 	for (var i = currentWord.length - 1; i >= 0; i--) {
 		underScore.push('_');
 	}
   return underScore;
 };
// set initial blank underscores and initial score

hangDisplayString = hangSwap().toString();
hangDisplayFinal = hangDisplayString.split(',').join(" ");
document.getElementById("displayWord").innerHTML = hangDisplayFinal;
document.getElementById("wins").innerHTML = numWins;

// capture keystrokes and analyze
function game(){
	document.onkeyup = function(event) {
	  userGuess = event.key;
		if (userGuess.search(/[^a-zA-Z]+/) === -1) {
			userGuess = userGuess.toLowerCase();
		  	if(rightWord.indexOf(userGuess) === -1 && wrongWord.indexOf(userGuess) === -1){
			  	if(currentWord.indexOf(userGuess) > -1) {
				  	rightWord.push(userGuess);
				  	document.getElementById("displayWord").innerHTML = letterPosition(userGuess);
					  	if (hangDisplayFinal.split(' ').join('') === currentWord) {
							numWins = numWins + 1;
							document.getElementById("wins").innerHTML = numWins;
							document.getElementById("displayWord").innerHTML = hangDisplayFinal;
							document.getElementById("repInst").innerHTML = "You Win! Press Spacebar To Play Again.";
							onWin();
							// document.onkeyup = function(event) {
							// 	var userSpace = event.keyCode;
							// 	if (userSpace == 32){
							// 		currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
							// 		hangDisplayString = hangSwap().toString();
							// 		hangDisplayFinal = hangDisplayString.split(',').join(" ");
							// 		document.getElementById("displayWord").innerHTML = hangDisplayFinal;
							// 		guessLeft = 12;
							// 	}
							// }
						}
			  	}
		  else {
		  	wrongWord.push(userGuess);
		  	/// display wrong keys pressed
		  	document.getElementById("wrongText").innerHTML = wrongWord;
		  	///counter for wrong answers
		  	guessLeft = guessLeft - 1;
		  	document.getElementById("guessText").innerHTML = guessLeft;
		  	if(guessLeft === 0){
		  		onLose();
		  	}
		  	}
			}
	}
	}
}


game();

var hangDisplay = hangSwap();
/// replace underscore with correct letter

  function letterPosition(userGuess) {
    var resultMatches = [];
    var ind = currentWord.indexOf(userGuess);
    console.log("ind: "+ind);
    // if userGuess matches one or more letters in the current word
    // push all instances of that letter to resultMatches
    while (ind !== -1) {
      resultMatches.push(ind);
      ind = currentWord.indexOf(userGuess, ind + 1);
      console.log("ind2: "+ind);
      console.log("resultMatches: "+resultMatches);
    }

    if (resultMatches.length > 0){
    	var arrayLength = resultMatches.length;
    	for (var i = 0; i < arrayLength; i++) {
    	console.log("hangDisplay: "+hangDisplay);	
    	hangDisplay[resultMatches[i]] = userGuess;
		}
		hangDisplayString = hangDisplay.toString();
		console.log("hangDisplayString: "+hangDisplayString);
		hangDisplayFinal = hangDisplayString.split(',').join(" ");
    }

    return hangDisplayFinal;
}




// reset on win or lose

function onWin() {
	document.getElementById("repInst").innerHTML = "YOU WIN!! Press enter to play again.";
	document.getElementById("repInst").style.color = "#7f1311";
	document.getElementById("repInst").style.fontSize = "60px";
	document.onkeyup = function(e) {
		userSpace = e.keyCode;
		if (userSpace == 13){
			currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
			hangDisplayString = hangSwap().toString();
			hangDisplayFinal = hangDisplayString.split(',').join(" ");
			document.getElementById("displayWord").innerHTML = hangDisplayFinal;
			//set variable initial states
			underScore = [];
			rightWord = [];
			wrongWord = [];
			guessLeft = 12;
			userGuess = "";
			userSpace = "";
			hangSpaces = "";
			hangDisplay = hangSwap();
			document.getElementById("guessText").innerHTML = guessLeft;
			document.getElementById("wrongText").innerHTML = wrongWord;
			document.getElementById("repInst").innerHTML = "Press any letter key to begin guessing your word!";
			document.getElementById("repInst").style.color = "#663500";
			document.getElementById("repInst").style.fontSize = "36px";
			game();
		}
	}
}


function onLose() {
	document.getElementById("repInst").innerHTML = "YOU LOSE!! Press enter to play again.";
	document.getElementById("repInst").style.color = "#7f1311";
	document.getElementById("repInst").style.fontSize = "60px";
	document.onkeyup = function(e) {
		userSpace = e.keyCode;
		if (userSpace == 13){
			currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
			hangDisplayString = hangSwap().toString();
			hangDisplayFinal = hangDisplayString.split(',').join(" ");
			document.getElementById("displayWord").innerHTML = hangDisplayFinal;
			//set variable initial states
			underScore = [];
			rightWord = [];
			wrongWord = [];
			guessLeft = 12;
			userGuess = "";
			userSpace = "";
			hangSpaces = "";
			hangDisplay = hangSwap();
			document.getElementById("guessText").innerHTML = guessLeft;
			document.getElementById("wrongText").innerHTML = wrongWord;
			document.getElementById("repInst").innerHTML = "Press any letter key to begin guessing your word!";
			document.getElementById("repInst").style.color = "#663500";
			document.getElementById("repInst").style.fontSize = "36px";
			game();
		}
	}
}