// set list of words
var hangWords = ["rifle", "horse", "revolver", "outlaw"];

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

// convert the words to underscores

 var hangSwap = function(hangWords){
 	var hangSpaces = currentWord;
 	 underScore = [];
 	for (var i = currentWord.length - 1; i >= 0; i--) {
 		underScore.push('_');
 	}

   return underScore;
 };
// set initial blank underscores

hangDisplayString = hangSwap().toString();
hangDisplayFinal = hangDisplayString.split(',').join(" ");
document.getElementById("displayWord").innerHTML = hangDisplayFinal;

// capture keystrokes and analyze

document.onkeyup = function(event) {
  var userGuess = event.key;

  if(rightWord.indexOf(userGuess) === -1 && wrongWord.indexOf(userGuess) === -1){
  	if(currentWord.indexOf(userGuess) > -1) {
  	rightWord.push(userGuess);
  	document.getElementById("displayWord").innerHTML = letterPosition(userGuess);
  }
  else {
  	wrongWord.push(userGuess);
  	/// display wrong keys pressed
  	document.getElementById("wrongText").innerHTML = wrongWord;
  	///counter for wrong answers
  	guessLeft = guessLeft - 1;
  	document.getElementById("guessText").innerHTML = guessLeft;
  	if(guessLeft === 0){
  		alert("You Lose!")
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
