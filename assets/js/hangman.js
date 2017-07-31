	var hash="5545b6f2f668966888319100a93d32c5";
	var publickey = "8a10078d47a38b6a5c7272b337efb398";
	var startsWith;
	var offset;
	var randomCharacterName;
	var randomIndex=Math.floor((Math.random() * 20) + 1);
	var answerArray, guessArray = new Array();

	startsWith = randomLetter();
	offset = getOffSet(startsWith);

	var htmlCall = "http://gateway.marvel.com/v1/public/characters?" + 
									"nameStartsWith=" + startsWith +
								  "&offset=" + offset +
									"&ts=" + 1 +
									"&apikey=" + publickey + 
									"&hash=" + hash;

$.getJSON(htmlCall, function(dowloadedJSON) {
    //data is the JSON string
    var characterImage;
    randomCharacterName = dowloadedJSON.data.results[randomIndex].name;
    var characterImage = dowloadedJSON.data.results[randomIndex].thumbnail.path + "/portrait_fantastic.jpg";
    var copyright = dowloadedJSON.attributionHTML;
		jQuery("#marvelCharacterImage").attr("src",characterImage);
		answerArray = randomCharacterName.split('');
		resetGuessArray();
		document.getElementById("marvelCharacter").innerHTML = "" +(guessArray);
		document.getElementById("marvelCopyright").innerHTML = copyright;
		alert("Marvel Character loaded! Guess the character name.");	

    document.onkeyup = function(event) {
      evaluateGuess(event.key);
    };

});	


function randomLetter() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function getOffSet(letter){
	var maxReturnedCharacters = 20;

		switch(letter){
		case 'a':
			return Math.floor((Math.random() * (79-maxReturnedCharacters)));
			break;
		case 'b':
			return Math.floor((Math.random() * (92-maxReturnedCharacters)));
			break;
		case 'c':
			return Math.floor((Math.random() * (100-maxReturnedCharacters)));
			break;
		case 'd':
			return Math.floor((Math.random() * (78-maxReturnedCharacters)));
			break;
		case 'e':
			return Math.floor((Math.random() * (33-maxReturnedCharacters)));
			break;
		case 'f':
			return Math.floor((Math.random() * (37-maxReturnedCharacters)));
			break;
		case 'g':
			return Math.floor((Math.random() * (56-maxReturnedCharacters)));
			break;
		case 'h':
			return Math.floor((Math.random() * (70-maxReturnedCharacters)));
			break;
		case 'i':
			return Math.floor((Math.random() * (38-maxReturnedCharacters)));
			break;
		case 'j':
			return Math.floor((Math.random() * (44-maxReturnedCharacters)));
			break;
		case 'k':
			return Math.floor((Math.random() * (34-maxReturnedCharacters)));
			break;
		case 'l':
			return Math.floor((Math.random() * (54-maxReturnedCharacters)));
			break;
		case 'm':
			return Math.floor((Math.random() * (152-maxReturnedCharacters)));
			break;
		case 'n':
			return Math.floor((Math.random() * (43-maxReturnedCharacters)));
			break;
		case 'o':
			return 0; //only 19 characters no offset needed
			break;
		case 'p':
			return Math.floor((Math.random() * (61-maxReturnedCharacters)));
			break;
		case 'q':
			return 0; // only 8 characters no offset needed
			break
		case 'r':
			return Math.floor((Math.random() * (59-maxReturnedCharacters)));
			break;
		case 's':
			return Math.floor((Math.random() * (196-maxReturnedCharacters)));
			break;
		case 't':
			return Math.floor((Math.random() * (92-maxReturnedCharacters)));
			break;
		case 'u':
			return Math.floor((Math.random() * (21-maxReturnedCharacters)));
			break;
		case 'v':
			return Math.floor((Math.random() * (32-maxReturnedCharacters)));
			break;
		case 'w':
			return Math.floor((Math.random() * (57-maxReturnedCharacters)));
			break;
		case 'x':
			return 0; //only 15 characters no offset needed
			break;
		case 'y':
			return 0; // only 4 characters no offset needed
			break
		case 'z':
			return 0; // only 10 characters no offset needed
			break			
		default	:
			break;
		}
}

function resetGuessArray() {
	for (var i = 0; i < answerArray.length; i++) {
		guessArray[i] = "*";
	}
}

function evaluateGuess(guess){
	var indexOfGuess=answerArray.indexOf(guess);

	if (indexOfGuess>=0){
		guessArray[indexOfGuess]=guess;
		document.getElementById("marvelCharacter").innerHTML = guessArray.toString();
	} else{
		alert("nope");
	}
}