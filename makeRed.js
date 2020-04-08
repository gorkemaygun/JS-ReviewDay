var paragraph=$("p");
console.log(paragraph)

function setAttributes(attr){
	for (var i = 0; i < paragraph.length; i++) {
		paragraph[i].setAttribute('onclick','red(this)');	
	}
}
function red(red){
		var itemToRed=red;
		itemToRed.style.color="red";
		
}
setAttributes();

