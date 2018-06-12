const ICOCoin = artifacts.require('ICOCoin');


contract('ICOCoin', function (accounts) {
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

  describe("Contract deployment", function(){
    it("should assert true", function() {
      return ICOCoin.deployed().then(function(instance) { assert(true)});
  		});
	});
});
