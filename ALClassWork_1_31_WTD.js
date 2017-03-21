//Start with implementing the stack in the text book and then the 
//decimal to binary conversion exercise. 

class Stack{
	constructor(){
		var items = [];
		this.push = function(element){
			items.push(element);
		}
		this.pop = function(){
			var element = items.pop();
			return(element);
		}
	}//end construct
}//end stack

//test for new stack class
var myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
var pop1 = myStack.pop();
console.log(pop1);

//attempt at converting decimal to binery

//myStack.clear(); //start fresh
var newStack = new Stack();
var numberToConvert = 24;
var result = 0;
var remainder = 0;
for(;;){ //infinite loop
	remainder = numberToConvert % 2;
	if(remainder = 1){
		newStack.push(1);
	}
	else{
		newStack.push(0);
	}
	result = numberToConvert / 2;
	numberToConvert == result;
	
	if(numberToConvert = 1){
	break; //needed to break from the infinite loop
	}
}