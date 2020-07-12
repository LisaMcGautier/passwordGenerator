// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(passwordLength);

if(passwordLength < 8) {
    alert("Minimum password length is 8 characters.");
    passwordLength = prompt("How many characters would you like your password to contain?");
    console.log(passwordLength);
}

if(passwordLength > 128) {
    alert("Maximum password length is 128 characters.");
    passwordLength = prompt("How many characters would you like your password to contain?");
    console.log(passwordLength);
}

if(passwordLength <= 7 || passwordLength >= 129) {
    alert("Minimum password length is 8 characters. Maximum password length is 128 characters.");
    passwordLength = prompt("How many characters would you like your password to contain?");
    console.log(passwordLength);
}

if(passwordLength >= 8 || passwordLength <= 128) {
    alert("You have chosen a password length of " + passwordLength + " characters.");
}


// var randomNumber = Math.random();
// console.log("Random Number: "+ randomNumber);

// var randomValue = randomNumber * 10;
// console.log("Random Value: " + randomValue);

// var withoutDecimals = Math.floor(randomValue);
// console.log("Without decimals:" + withoutDecimals);

// var special = ["!","@","#","$","%","&","*","?","+","="];
// console.log(special);


confirm("Click OK to include $peci@l characters.");

var special = ["!","@","#","$","%","&","*","?","+","="];
console.log(special);

var randomNumber = Math.random();
var randomValue = randomNumber * special.length;
var randomIndex = Math.floor(randomValue);
console.log("Random special: " + special[randomIndex]);

var firstCharacter = special[randomIndex];

confirm("Click OK to include numeric characters.")

var number = [0,1,2,3,4,5,6,7,8,9,];
console.log(number);

randomNumber = Math.random();
randomValue = randomNumber * number.length;
randomIndex = Math.floor(randomValue);
console.log("Random number: " + number[randomIndex]);

var secondCharacter = number[randomIndex];

confirm("Click OK to include lowercase characters.");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowercase);

randomNumber = Math.random();
randomValue = randomNumber * lowercase.length;
randomIndex = Math.floor(randomValue);
console.log("Random lowercase: " + lowercase[randomIndex]);

var thirdCharacter = lowercase[randomIndex];

confirm("Click OK to include lowercase characters.");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(uppercase);

randomNumber = Math.random();
randomValue = randomNumber*uppercase.length;
randomIndex = Math.floor(randomValue);
console.log("Random uppercase: " + uppercase[randomIndex]);

var fourthCharacter = uppercase[randomIndex];

console.log(firstCharacter + secondCharacter + thirdCharacter + fourthCharacter);








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
