// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Need arrays for Special Characters, Numeric Characters, Lowercase Characters, and Uppercase Characters
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var upperChars = lowerChars.toUpperCase;
var possibleChars = [];


// var specialChars = "!@#$%^&*"(".split("")
// var possibleCharacters=[]
// Create generatePassword
// Prompt the User for password legnth.
var passLength = prompt("How long would you like your password to be? Please enter a value between 8 and 128.");
  if (passLength >= 8 && passLength <= 128) {
  console.log(passLength);
  }

// Store password length in a variable.
// Confirm whether the user wants special characters.
var useSpecChars = confirm("Would you like to use special characters?");
  console.log(useSpecChars);
  if (useSpecChars=== true) {
    possibleChars.push(specChars);
    console.log(possibleChars);
  }
// creates a Boolean whether the user wants special characters. includeSpecialCharacters
// Confirm whether the user wants numeric characters.
var useNumChars = confirm("Would you like to use numbers?");
  console.log(useNumChars);
  if (useNumChars === true) {
    possibleChars.push(numChars);
    console.log(possibleChars);
  }
// creates a Boolean whether the user wants numeric characters. includeNumericCharacters
// Confirm whether the user wants lowercase characters.
var useLowerChars = confirm("Would you like to use lowercase characters?");
  console.log(useLowerChars);
  if (useLowerChars === true) {
    possibleChars.push(lowerChars);
    console.log(possibleChars);
  }
// creates a Boolean whether the user wants lowercase characters. includeLowerCaseCharacters
// Confirm whether the user wants uppercase characters.
var useUpperChars = confirm("Would you like to use uppercase characters?");
  console.log(useUpperChars);
  if (useUpperChars === true) {
    possibleChars.push(upperChars);
    console.log(possibleChars);
  }
  console.log("========");
  console.log(possibleChars);
  console.log("========");
// creates a Boolean whether the user wants uppercase characters. includeUpperCaseCharacters
// if character Boolean is true, add that array to the possible characters array.
// Then when we completed possibleCharacters array, build the new password string.
// var passwordStr=""

var passwordStr = possibleChars[Math.floor(Math.random() * passLength )];
console.log(passwordStr);
// return passwordStr
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Splitting an array is the way to go for combining the elements.