'use strict';

let isPrime = (num) => {
	let root = Math.round(Math.sqrt(num)) + 1;
	// Try all potential factors from 0 to the square root of n
	for (let i = 2; i < root; i++){
		if (num % i == 0) {		// Is it a factor?
			return false;	//Found a factor
		}
		
	}
	return true;
}

module.exports = {



	getPrimes: (n) => {
		
		if (n < 0 || typeof(n) != 'number' || typeof(n) == typeof([])){

			return 'undefined';
		}

		else if (n == 1) {
			return 'Not a Prime number';
		}

		else{
			let holder = [];		//variable to store the result

			for (let i = 2; i <= n; i++){
			
				if (isPrime(i)){ 	//See if value is prime
					
					holder.push(i);
				}
			}
			return holder;
		}
		
	}

}