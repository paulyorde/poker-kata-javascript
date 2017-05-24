function HighestCard() {}

HighestCard.prototype.determineFor = function(playerOneHand, playerTwoHand) {
	var playerOneHighestCard = 0, playerTwoHighestCard = 0;
	//var playerOneHasHighestCard = false, playerTwoHasHighestCard = false;

	

	for(card in playerOneHand) {
		playerOneHighestCard = playerOneHand[card];
		
	}

	for(card in playerTwoHand) {
		playerTwoHighestCard = playerTwoHand[card];
		
	}

	if(playerOneHighestCard > playerTwoHighestCard)	{
		return playerOneHighestCard;
	}
	else if(playerOneHighestCard < playerTwoHighestCard) {
		return playerTwoHighestCard;
	}

	return "tie"; // if both hands have same value - display tie;

}

 



