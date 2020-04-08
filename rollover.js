var i=0;
$("div.overout").mouseover(function(){
	i+=1;
	$(this).find("span").text("mouse over x " +i);
}).mouseout(function(){
	$(this).find("span").text("mouse out");
});