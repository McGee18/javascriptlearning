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
let myNumber = "74";
myNumber = Number(myNumber) + 3;

