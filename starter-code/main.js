/**
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";
**/

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
var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];


var createNewCard = function() {
	for (var i = 0; i < cards.length; i++) {
			var newCard = document.createElement('div');
			newCard.className = 'card';
			newCard.setAttribute('data-card', cards[i]);
			newCard.addEventListener('click', isTwoCards);
			document.getElementById('game-board').appendChild(newCard);
	}
}


var isMatch = function () {
	

	if (cardsInPlay[0] === cardsInPlay[1]) {

		alert("You found a match!");
	}

	else {
		alert("Sorry, try again.");
	}

	for (var x = -1, y = 0; x <= cardsInPlay.length; x++, y++) {
	
	document.querySelectorAll('.card')[y].innerHTML = " ";	
	
	}


}
var isTwoCards = function () {
	
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'King') {
		
		this.innerHTML = "<img src='King.png'>";
	} 

	else {
		this.innerHTML = "<img src='Queen.png'>";
	}

	if (cardsInPlay.length === 2) {

		isMatch(cardsInPlay);
  		cardsInPlay = [];

	}
}

createNewCard();

