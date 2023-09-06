// Declare two variables name myInt and myFloat, initialize them with integer and a float respectively, then type the variable names back in to check that everything is in order.
const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

// CHeck variables are of the same data type (number)
typeof myInt;
typeof myFloat;

// Round number to a fixed number of decimal places using toFixed() method
const lotsofdecimal = 1.765436534765436;
lotsofdecimal;
const twodecimalplaces = lotsofdecimal.toFixed(2);
twodecimalplaces;

//Covert number stored as string type (if input as text on form etc) by passing into Number() constructor. First find out if text string or not:
let myNumber = "74";
myNumber += 3;
typeof myNumber;

// once discovered text string, convert to number.
let myNumber1 = "74";
myNumber1 = Number(myNumber1) + 3;


//simple arithmetic examples - declare variable then use to calc
const num1 = 10;
const num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;

//more complex expressions - operator precedence - same as BIDMAS order in school
5 + 10 * 3;
(num2 % 9) * num1;
num2 + num1 / 8 + 2;

//use parantheses to override operator precedence 
(num2 + num1) / (8 + 2);

//increment and decerement operators - repeatedly add (++) or subtract (--) to assign a variable a new value
let num3 = 4;
num3++;

//have to run variable twice - runs first, then on next run increments the variable.
let num4 = 6;
num4--;
num4;

//to increment/decrement the variable, then return the value, the operators should move to the start of the variable.
let num5 = 10;
++num5;

//assignment operators assign a value to a variable 
let x = 3 // x contains the value 3

// let y += 4; //adds value on right to the variable value on left, then returns new variable value (x = x + 4;)
// let z -= 3; //subtracts value on right from variable on left, and returns new value (x = x - 3;)
// let w *= 3; //multiplies variable value on left by the value on the right, and returns the new variable value (x = x * 3)
// let v /= 3; //divides variable on the left by value on the right and returns new variable.Number

//example of assignment operator use
let a = 3;
let b = 4;
a *= b;

