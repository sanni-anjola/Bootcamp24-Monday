const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("Primes", function(){

	describe("handle valid input", function(){
		it("should return [2,3,5,7] as Primes for 9", function(){
			assert.deepEqual(myApp.getPrimes(9), [2, 3, 5, 7]);
		});

	})

	describe("handle valid input", function(){
		it("should return [2,3,5,7] as Primes for 9", function(){
			assert.deepEqual(myApp.getPrimes(12), [2, 3, 5, 7, 11]);
		});

	})

	describe("handle valid input", function(){
		it("should return [2] as Primes for 2", function(){
			assert.deepEqual(myApp.getPrimes(2), [2]);
		});

	})

	describe("handle invalid input", function(){
		it("should return undefined as Primes for string value", function(){
			assert.equal(myApp.getPrimes('word'), 'undefined');
		});

	})

		describe("handle invalid input", function(){
		it("should return undefined as Primes for array input", function(){
			assert.equal(myApp.getPrimes([]), 'undefined');
		});

	})

	describe("handle valid input", function(){
		it("should return empty as Primes for Zero", function(){
			assert.deepEqual(myApp.getPrimes(0), []);
		});

	})

	describe("handle valid input", function(){
		it("should return empty as Primes for One", function(){
			assert.deepEqual(myApp.getPrimes(1), 'Not a Prime number');
		});

	})

	describe("handle invalid input", function(){
		it("should return undefined as Primes for -3", function(){
			assert.equal(myApp.getPrimes(-3), 'undefined');
		});

	})

	describe("handle invalid input", function(){
		it("should return undefined as Primes for -17", function(){
			assert.equal(myApp.getPrimes(-17), 'undefined');
		});

	})

	describe("handle invalid input", function(){
		it("should return undefined as Primes for empty string", function(){
			assert.equal(myApp.getPrimes(''), 'undefined');
		});

	})


})