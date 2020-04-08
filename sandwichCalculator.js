function sandwichCalculator(slicesOfBread,slicesOfCheese){
	var sandwiches= Math.floor(slicesOfBread /2);
	if((slicesOfBread > 1)&&(slicesOfCheese < sandwiches)&&(slicesOfCheese > 0)){
	sandwiches=slicesOfCheese;
	console.log(sandwiches);
	return sandwiches;
	}
	else if((slicesOfCheese >= sandwiches)&&(slicesOfBread>1)){
		console.log(sandwiches);
		return sandwiches;
	}
	else if((slicesOfBread<2)||(slicesOfCheese=0)){
		console.log('No sandwiches for you')
		return 0;
	}
}
sandwichCalculator(90,12);