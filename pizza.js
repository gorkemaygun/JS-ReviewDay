var toppings=['Cheese','Pepperoni','Garlic','Peppers'];
function pizza(add){
	var addToppings=toppings.join(' and ');
	return console.log('A delicious pizza with' + " " + addToppings);
}
pizza();
