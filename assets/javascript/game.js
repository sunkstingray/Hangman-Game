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

// convert the words to underscores

 var hangSwap = function(hangWords){
 	var hangSpaces = currentWord;
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

document.onkeyup = function(event) {
  var userGuess = event.key;

	if (userGuess.search(/[^a-zA-Z]+/) === -1) {
		userGuess = userGuess.toLowerCase();
  if(rightWord.indexOf(userGuess) === -1 && wrongWord.indexOf(userGuess) === -1){
  	if(currentWord.indexOf(userGuess) > -1) {
  	rightWord.push(userGuess);
  	document.getElementById("displayWord").innerHTML = letterPosition(userGuess);
  	if (hangDisplayFinal.split(' ').join('') === currentWord) {
  		console.log(hangDisplayFinal);
		numWins = numWins + 1;
		document.getElementById("wins").innerHTML = numWins;
		document.getElementById("displayWord").innerHTML = hangDisplayFinal;
		alert("Well done! You Win! The word was    "+hangDisplayFinal+"   . Click OK to continue.");
		currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
		hangDisplayString = hangSwap().toString();
		hangDisplayFinal = hangDisplayString.split(',').join(" ");
		document.getElementById("displayWord").innerHTML = hangDisplayFinal;
		guessLeft = 12;
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
  		alert("You Lose! Click OK to play again.")
  		currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
		hangDisplayString = hangSwap().toString();
		hangDisplayFinal = hangDisplayString.split(',').join(" ");
		document.getElementById("displayWord").innerHTML = hangDisplayFinal;
  	}
  	}
	}
}
}

var hangDisplay = hangSwap();
/// replace underscore with correct letter

  function letterPosition(userGuess) {
    var resultMatches = [];
    var ind = currentWord.indexOf(userGuess);
    // if userGuess matches one or more letters in the current word
    // push all instances of that letter to resultMatches
    while (ind !== -1) {
      resultMatches.push(ind);
      ind = currentWord.indexOf(userGuess, ind + 1);
    }

    if (resultMatches.length > 0){
    	var arrayLength = resultMatches.length;
    	for (var i = 0; i < arrayLength; i++) {
    	hangDisplay[resultMatches[i]] = userGuess;
		}
		hangDisplayString = hangDisplay.toString();
		hangDisplayFinal = hangDisplayString.split(',').join(" ");
    }

    return hangDisplayFinal;
}

// counter for wins


// reset on win or lose

function onWin() {
	alert("Well done! You Win! Click OK to continue.");
	numWins = numWins + 1;
	document.getElementById("wins").innerHTML = numWins;
	currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
	document.getElementById("displayWord").innerHTML = hangDisplayFinal;
}