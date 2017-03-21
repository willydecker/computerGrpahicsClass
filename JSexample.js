//Create a variable, initialize it with a string and print it out using an alert
var name1 = "William";
alert(name1);

//Create 2 variables, initialize them with a number in each.  Now demonstrate add, subtract, multiply and divide operations and print out the result for each operation
var num1 = 1;
var num2 = 2;

var result = num1 + num2;
alert(result);

result = num1 - num2;
alert(result);

result = num1 * num2;
alert(result);

result = num1 / num2;
alert(result);

//Create two variables and initialize them to two different strings, now concatenate them and print them out using an alert.
var ex1 = "Hello";
var ex2 = "World";
result2 = ex1 + ex2;
alert(result2);

//Use a prompt to collect the user’s name.  Now print out a “Hello <user name>” message
var namePromt = prompt("Give me your name:");
alert(namePromt);

//Use a prompt twice to get two numbers from the user.  Now use the parseInt() function to convert them to numbers, add them and print the result
var numPromt = prompt("Give me a number");
var numPromt2 = prompt("Give me another number");

result = parseInt(numPromt,10) + parseInt(numPromt2,10);
alert(result);
