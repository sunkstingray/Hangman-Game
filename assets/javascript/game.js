// set list of words
var hangWords = ["rifle", "horse", "revolver", "outlaw"];

var currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];

console.log(currentWord);

var hangLetters = currentWord.split("");



console.log(hangLetters);

var underScore = [];
var rightWord = [];
var wrongWord = [];
var guessLeft = 12;
var underScoreString = "";
var underScoreFinal = "";

/// convert the words to underscores

 var hangSwap = function(hangWords){
 	var hangSpaces = currentWord;
 	for (var i = currentWord.length - 1; i >= 0; i--) {
 		underScore.push('_');
 	}
 	underScoreString = underScore.toString();
 	underScoreFinal = underScoreString.split(',').join(" ");
   return underScoreFinal;
 };



document.getElementById("displayWord").innerHTML = hangSwap();

 console.log (hangSwap());
 console.log (underScore);

/// capture keystrokes and analize

document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log(userGuess);
  console.log(rightWord.indexOf(userGuess));
  console.log(wrongWord.indexOf(userGuess));

  if(rightWord.indexOf(userGuess) === -1 && wrongWord.indexOf(userGuess) === -1){
  if(currentWord.indexOf(userGuess) > -1) {
  	rightWord.push(userGuess);
  	console.log(rightWord);
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
	}}


/// replace underscore with correct letter

var hangDisplay = function(hangLetters){
	document.getElementById("displayWord").innerHTML = underScore;
}


///counter for wins


