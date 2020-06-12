

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variables
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Create generatePassword (function)
function generatePassword() {
  var finalPassword = "";
  var possibleChars = [];

  
// Prompt the User for password legnth and store length in a variable
var passLength = prompt("How long would you like your password to be? Please enter a value between 8 and 128.");
  while (passLength < 8 || passLength > 128) {
    var passLength = prompt("Please only choose a value between 8 and 128.");
  }


// Confirm whether the user wants special characters.
var useSpecChars = confirm("Would you like to use special characters?");
  console.log(useSpecChars);
  if (useSpecChars=== true) {
    possibleChars.concat(specChars);
    possibleChars = possibleChars.concat(specChars);
  }


// Confirm whether the user wants numeric characters.
var useNumChars = confirm("Would you like to use numbers?");
  console.log(useNumChars);
  if (useNumChars === true) {
    possibleChars.concat(numChars);
    possibleChars = possibleChars.concat(numChars);
  }


// Confirm whether the user wants lowercase characters.
var useLowerChars = confirm("Would you like to use lowercase characters?");
  console.log(useLowerChars);
  if (useLowerChars === true) {
    possibleChars.concat(lowerChars);
    possibleChars = possibleChars.concat(lowerChars);
  }


// Confirm whether the user wants uppercase characters.
var useUpperChars = confirm("Would you like to use uppercase characters?");
  if (useUpperChars === true) {
    possibleChars.concat(upperChars);
    possibleChars = possibleChars.concat(upperChars);
  }
  
// var passwordStr=""
//var passwordStr = "";
//var passwordStr = possibleChars[Math.floor(Math.random() * possibleChars.length +1)]; //within the loop???
for (let i = 0; i < passLength; i++) {
  var passwordStr = possibleChars[Math.floor(Math.random() * possibleChars.length)];
  var finalPassword = finalPassword.concat(passwordStr);
}
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Splitting an array is the way to go for combining the elements.