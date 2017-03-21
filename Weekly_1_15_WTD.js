//Create an array and initialize it with 5 elements.  Use a for loop and delete the last item and print the length of the array after each iteration
var myArray = [1,2,3,4,5];
for (var i = 0; i < (myArray.length + 2); i++) {
	console.log(myArray);
	myArray.pop();
	console.log(myArray);
}

//Use a prompt to get the name of the user.  Reverse the characters and print out the name before reversing and after reversing
var userArray = prompt("Gimme your name");
var nameArray = userArray.split("");
console.log(nameArray);
nameArray.reverse();
console.log(nameArray);

//Use a prompt to get the name of the user, capitalize it and print it out
userArray = prompt("gimme your name again in all lower case");
console.log(userArray);
var upArray = userArray.toUpperCase();
console.log(upArray);

//Use a prompt to get the name of the user.  Store it in an array and insert a space between each element and then print it out
userArray = prompt("gimme your name again");
var tempArray = [];
console.log(userArray);
for (var i = 0; i < userArray.length; i++) {
	tempArray.push(userArray[i]);
	tempArray.push(" ");
}
userArray == tempArray;
console.log(userArray);

//Use a prompt to get the name of the user.  Extract all the vowels and print them out
userArray = prompt("gimme your name one last time");
nameArray = userArray.split(""); 
var vowelArray = ['A','a','E','e','I','i','O','o','U','u'];
var element = [];
for (var i = 0; i < nameArray.length; i++) {
	element.push(nameArray[i]);
}
var present = vowelArray.indexOf(element);