 //Create a variable called myString.  Initialize it to "Hello World".  Now print it to the console
 var myString = "Hello WOrld";
 console.log(myString);

//Create two variables called number1 and number2.  Initialize them to 10 and 20.  Add them and print the result to the console
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log(result);

//Use a for loop that counts from 0 to 5.  Use the continue keyword to print the message "Hello" only on the 2nd and 3rd time in the loop
for (var i = 0; i < 5; i++}{
	if(i = 1 || 4 || 5){
		continue;
	}
	console.log("Hello");
}

// /Use a prompt to get the first name and last name from the user.  Now count the number of alphabets and print the result.
var input1 = prompt("Gimme your full name");
var strLen = input1.length;
console.log(strLen);

//Use a prompt to get 2 numbers and a math operation from the user (+, -, /, *) now perform the operation on the two numbers and print the result.  
//Use separate functions for the +, -, / and * operations.  Make sure to use the parseInt() function to convert user input from string to integer.  Use a switch case statement to check the math operation requested and call the appropriate function to do it.

var input2 = prompt("Gimme a number");
input2 = input2.parseInt;
var input3 = prompt("gimme another number");
input3 = input3.parseInt;
var input4 = prompt("gimme an operation to do");

switch(input4){
	case +:{
		result = input2 + input3;
		console.log(result);
	}
	case -:{
		result = input2 - input3;
		console.log(result);
	}
	case *:{
		result = input2 * input3;
		console.log(result);
	}
	case /:{
		result = input2/input3;
		console.log(result);
	}
}

//Collect two inputs from the user, now use an if statement to find out which is greater and print the result
var input5 = prompt("gimme a number");
input5 = input5.parseInt;
var input6 = prompt("gimme anther number");
input6 = input6.parseInt;

if(input5 < input6){
	console.log(input6);
}
if(input6 < input5){
	console.log(input5);
}

//Repeat the same above but this time use a ternary operator to do the job instead of an if statement
result = 