describe("HighestCard", function() {
  describe("if player has highest card", function() {
  	var playerOneHand = {
      'suit': ['C', 'D', 'H', 'S'],
      'face': [12,12,10,9,8]
    };
    var playerTwoHand = {
      'suit': ['C', 'D', 'H', 'S'],
      'face': [13,5,10,9,7]
    };
    
    it("should return highest card of player 2", function() {    	
      var underTest = new HighestCard();

      var result = underTest.determineFor(playerOneHand, playerTwoHand);

      expect(result).toBe(13);
    });
  });

  describe("if players have the same value", function() {
  	var playerOneHand = {
      'suit': ['C', 'D', 'H', 'S'],
      'face': [13,12,10,9,8]
    };
    var playerTwoHand = {
      'suit': ['C', 'D', 'H', 'S'],
      'face': [13,12,10,9,8]
    };

    it("should display tie", function() {   	
      var underTest = new HighestCard();

      var result = underTest.determineFor(playerOneHand, playerTwoHand);

      expect(result).toEqual("tie");
    });
  });

  describe("if some cards match in both hands", function() {
  	var playerOneHand = {
      'suit': ['C', 'D', 'H', 'S'],
      'face': [13,12,10,9,8]
    };
    var playerTwoHand = {
      'suit': ['C', 'D', 'H', 'S'],
      'face': [13,12,10,9,7]
    };

    it("should return highest card of player one", function() {   	
      var underTest = new HighestCard();

      var result = underTest.determineFor(playerOneHand, playerTwoHand);

      expect(result).toEqual(8);
    });
  });
 

});



