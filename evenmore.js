//#1
 console.log('Hello World');

//#2
  var name=prompt('What is your name?');
	console.log("Hi," + name);

//#3
if (name=='Alice'||name=='Bob') {
	console.log('Hi,' + name);
}
else{
	console.log('Who are you?');
}

//#4
var n=prompt('Give me a number');
  var sum=0;
  for (var i = 1; i <= n; i++) {
 	var sum=sum+i;
 	}
	console.log(sum);


//#5
var n=prompt('Give me a number');
  var sum=0;
  for (var i = 1; i <= n; i++) {
 	if (i % 3==0 || i %5 ==0 ) {
 		var sum=sum+i;
 		}
 	}
	console.log(sum);

//#6
var n=prompt('Give me a number');
var opr=prompt('Choose an operation add or multiply ');
var sum=0;
if(opr=='add'){
	
	for (var i = 1; i <= n; i++) {
 	var sum=sum+i;
 	}
	console.log(sum);	
}
else if(opr=='multiply'){
	var sum=1;
	for (var i = 1; i <= n; i++) {
 	var sum=sum*i;
 	}
	console.log(sum);
}else{
	console.log("Please choose add or multiply");
}
//#7
var total7=0;
var newarray7=[];
for (var i = 1; i <=12; i++) {
	for(var j=1; j <=12; j++){
		total7=i*j;
	}
	newarray7.push(total7);
}
console.log(newarray7);
//#8

var number=prompt('Give me a number that you want to see prime number until this number');
for (var counter = 2; counter <= number; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
//#9
var guess=prompt('Tell me a number that you guess');
var number9=17;

for (var i = 0, rights=1; i <= rights; i++) {
	if (guess == number9){
	alert('You find a hidden number ' + rights +'. tries');
	
}else if(guess > number9){
	guess=prompt('Your guess is too high.Give me another guess');
	rights ++;
	

}else if(guess < number9){
	guess=prompt('Your guess is too low.Give me another guess');
	rights++;
	}
}

//#10

var currentyear=2020;
var arr10=[];
for (var i = 0; i < 20; i++) {	
		currentyear+=4
		arr10[i]=currentyear;
	}	
console.log('Leap years: ' + arr10);

//#11

function maxItem(){
    var arr11 = [];
    var max = 0;
    for (var i = 0; i <= 10; i++) {
    	arr11[i]=(Math.random()*100);
    	console.log(Math.floor(arr11[i]));
    }
  
    arr11.forEach(function(scan){
        if (scan>max) {
        	max=scan;
        }
    })

    return max;
}

console.log('Maximum Number is ' + Math.floor(maxItem()));
//#12

function reverseList(){
var arr12=['mazda','lexus','BMW','audi','mercedes'];
return console.log(arr12.reverse());

}
reverseList();
//#13

var arr13=['mazda','lexus','BMW','audi','mercedes'];
var item=prompt('Check your item whether in a list or not');
var result13='';

for (var i = 0; i < arr13.length; i++) {
	
	result13=(item + ' is NOT in the list');
	
	if(item==arr13[i]){
		result13=('Your item is in the list');
		
	}
}
alert(result13);

//#14

var arr14=[1,2,3,4,5,6,7,8,9,10];
var ar14=[];
for (var i=0; i < arr14.length ; i++){
	ar14=arr14[2*i+1];
	console.log(arr14);	
	}

//#15

var arr15=[1,2,3,4,5,6,7,8,9,10];
total15=0;
for (var i = 0; i < arr15.length; i++) {
	total15+=arr15[i];
}
console.log(total15);

//#16

function palindrome(){
var word=prompt("Give me a word");
var splitword=word.split("");
var reverseword=splitword.reverse();
var word2=reverseword.join('');
if(word== word2){
	alert("It's palindrome ");
}else{
	alert("It's not a palindrome.")
}
}
palindrome();
//#17
//for-loop

var array17=[1,2,3,4,5,6,7,8,9,10];
total17=0;
for (var i = 0; i < array17.length; i++) {
	total17+=array17[i];
}
console.log(total17);
//while-loop
var i=0;
var array17a=[1,2,3,4,5,6,7,8,9,10];
total17a=0;
while(i<array17a.length){
	total17a+=array17a[i];
	i++;
}
console.log(total);
//recursion
var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};

console.log(array_sum([1,2,3,4,5,6]));

//#18

function square(){
var array18=[1,2,3,4,5,6];
var ar18=[];
for (var i = 0; i < array18.length; i++) {
	ar18.push(array18[i]*array18[i]);

}
console.log(ar18);
}
square();
//#19

function concatenate(){
var list19=['a','b','c'];
var list19a=[1,2,3]
for (var i = 0; i < list19a.length; i++) {
	list1.push(list19a[i]);
}
	return console.log(list19);
}
concatenate();

//#20

var list20=['a','b','c'];
var list20a=[1,2,3];
var list20b=[];
for (var i = 0; i < list20a.length; i++) {
	list20b[2*i]=list20[i];
	list20b[2*i+1]=list20a[i];
}
console.log(list);

//#21

function merge (){
var list21=[1,4,6];
var list21a=[2,3,5];
list=[];
for (var i = 0; i < list1.length; i++) {
	list.push(list21[i]);
	list.push(list21a[i]);
}
console.log(list.sort());
}
merge();

//#22

function rotate_array(a){
var arr22=[1,2,3,4,5,6];

	for (var i = 0; i < a; i++) {
		arr22.unshift(arr22.pop())
	}
	return arr22;
}
console.log(rotate_array(4));

//#23

function fibonacci(){
	var arr23=[];
	arr23[0]=1;
	arr23[1]=1;
	for (var i = 2; i <100 ; i++) {
		arr23[i]=arr23[i-2]+arr23[i-1];
		}
		return arr23;
}
console.log(fibonacci());
//#24

var userinput=prompt('Enter multiple digits number ex.2345');
var splitInput=userinput.toString().split('');
var arr24=splitInput.map(function(a){
	return parseInt(a); 
})
console.log(arr24);

//#25
function translate(){
var userSentence=prompt('Give me a sentence that you want to translate from English to Pig Latin');
var splitSentence=userSentence.split(' ');

var arr25=splitSentence.map(function(a){
	var newarr25=a.split('');
	newarr25.push(newarr25.shift()+"ay ");
	var combine=newarr25.join('');
	return combine;
});
	return arr25.join('');	
}
console.log(translate());