var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

/** if(cardOne === cardTwo || cardTwo === cardOne)
	{
		alert("You found a match!");
	}
else if(cardOne !== cardTwo || cardTwo !== cardOne)
	{
		alert("Sorry, try again.");
	}
if(cardThree === cardFour || cardFour === cardThree)
	{
		alert("You found a match!");
	}
else if(cardThree !== cardFour || cardFour !== cardThree)
	{
		alert("Sorry, try again.");
	}**/

var createNewCard = function(x) {
	for (var i = 0; i < x; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		document.getElementById('game-board').appendChild(newCard);	
	}
}
createNewCard(4);


