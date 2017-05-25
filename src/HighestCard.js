function HighestCard() {}

HighestCard.prototype.determineFor = function(playerOneHand, playerTwoHand) {
	
	var p1 = playerOneHand.face.sort(function(a, b){return b-a});
	var p2 = playerTwoHand.face.sort(function(a, b){return b-a});

	for(var card = 0; card < 5; card++) {
		if(p1[card] > p2[card]) {
			return p1[card];
		}
		else if(p1[card] < p2[card]) {
			return p2[card];
		}
	}

	return "tie"; // if both hands have same value - display tie;

}

 



