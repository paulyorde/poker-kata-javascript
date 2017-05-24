describe("HighestCard", function() {
  describe("should return highest card of playerOne", function() {
  	var playerOneHand = {"A":13};
    var playerTwoHand = {"K":12};
    
    it("Highest Card", function() {
    	
      var underTest = new HighestCard();

      var result = underTest.determineFor(playerOneHand, playerTwoHand);

      expect(result).toBe(13);
    });

    
  });

  describe("should return tie if both hands have the same value", function() {
  	var playerOneHand = {"A":13};
    var playerTwoHand = {"A":13};
    
   
    it("returns tie", function() {
    	
      var underTest = new HighestCard();

      var result = underTest.determineFor(playerOneHand, playerTwoHand);

      expect(result).toEqual("tie");
    });
  });
 

});



