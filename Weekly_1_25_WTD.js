alert("1. Use a for loop to count from 0-5 and use an if statement and a break statement to print an alert only on the first time.");
for (var i = 0; i < 6; i++) {
	console.log("%d", i);
	if (i == 0){
		alert("This is the first time to CRASH");
		break;
	}
}
alert("2. Use a for loop to count from 0-5 and use an if statement and a break statement to print an alert only on the first 3 times.");
for (var i = 0; i < 6; i++) {
	console.log("%d", i);
	if (i == 4){
		alert("This is the third itteraion and CRASH");
		break;
	}
}
alert("3. Use a for loop to count from 0-5 and use an if statement and break statement to print an alert only for the first 4 times.");
for (var i = 0; i < 6; i++) {
	console.log("%d", i);
	if (i == 5){
		alert("This is the fourth itteraion and CRASH");
		break;
	}
}
alert("4. Use a for loop and and use an  if statement, a continue statement and a break statement to print an alert only on the 1st and 3rd times.");
for (var i = 0; i < 5; i++) {
	console.log("%d", i);
	if (i != 0 || 2){
		continue;
	}
	alert("lert the 1st and third");
}
alert("5. Use two variables a and b.  Initialize them as per the table and perform the actions shown");
var an1 = true;
var an2 = true;
if (an1 && an2 == true) {
	alert("hello");
}
var an1 = true;
var an2 = false;
if (an1 || an2 == true) {
	alert("hello");
}
var an1 = true;
var an2 = false;
if (an1 == true && an2 == false) {
	alert("hello");
}
var an1 = false;
var an2 = false;
if (an1 || an2 == false) {
	alert("hello");
}
var an1 = false;
var an2 = true;
if (an1 == false && an2 == true) {
	alert("hello");
}
var an1 = false;
var an2 = true;
if (an1 != true && an2 != false) {
	alert("hello");
}
var an1 = false;
var an2 = false;
if (an1 != true || an2 != true) {
	alert("hello");
}
var an1 = true;
var an2 = true;
if (an1 != false && an2 != true) {
	alert("hello");
}
var an1 = false;
var an2 = false;
if ((an1 != true) && (an2 != true) && (an1 = an2)) {
	alert("hello");
}
var an1 = true;
var an2 = false;
if (an1 != an2) {
	alert("hello");
}