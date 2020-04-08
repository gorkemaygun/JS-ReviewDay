var array=['javascript','jquery','html','css'];
var newarray=array.map(capitalise).toString();
function capitalise(word){
	return word.toUpperCase();
}
console.log(newarray);