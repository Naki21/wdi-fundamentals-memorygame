var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

if(cardOne === cardTwo || cardTwo === cardOne)
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
	}