// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("How many characters would you like your password to contain?");
// console.log(passwordLength);

if (passwordLength < 8) {
  alert("Minimum password length is 8 characters.");
  passwordLength = prompt("How many characters would you like your password to contain?");
  // console.log(passwordLength);
}

if (passwordLength > 128) {
  alert("Maximum password length is 128 characters.");
  passwordLength = prompt("How many characters would you like your password to contain?");
  // console.log(passwordLength);
}

if (passwordLength <= 7 || passwordLength >= 129) {
  alert("Minimum password length is 8 characters. Maximum password length is 128 characters.");
  passwordLength = prompt("How many characters would you like your password to contain?");
  // console.log(passwordLength);
}

if (passwordLength >= 8 || passwordLength <= 128) {
  alert("You have chosen a password length of " + passwordLength + " characters.");
  console.log(passwordLength);
}

var passwordStart = "";

var alphabet = [];

var specialCharacters = confirm("Click OK to include $peci@l characters.");

if (specialCharacters == true) {
  var special = ["!", "@", "#", "$", "%", "&", "*", "?", "+", "="];
  
  alphabet.push.apply(alphabet, special);
  
  var randomNumber = Math.random();
  var randomValue = randomNumber * special.length;
  var randomIndex = Math.floor(randomValue);
  
  var firstCharacter = special[randomIndex];
  passwordStart = passwordStart + firstCharacter;
}

var numericChararacters = confirm("Click OK to include numeric characters.")

if (numericChararacters == true) {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  
  alphabet.push.apply(alphabet, numbers);
  
  randomNumber = Math.random();
  randomValue = randomNumber * numbers.length;
  randomIndex = Math.floor(randomValue);
  
  var secondCharacter = numbers[randomIndex];
  passwordStart = passwordStart + secondCharacter;
}

var lowercaseCharacters = confirm("Click OK to include lowercase characters.");

if (lowercaseCharacters == true) {
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  alphabet.push.apply(alphabet, lowercase);
  
  randomNumber = Math.random();
  randomValue = randomNumber * lowercase.length;
  randomIndex = Math.floor(randomValue);
  
  var thirdCharacter = lowercase[randomIndex];
  passwordStart = passwordStart + thirdCharacter;
}

var uppercaseCharacters = confirm("Click OK to include UPPERCASE characters.");

if (uppercaseCharacters == true) {
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  alphabet.push.apply(alphabet, uppercase);
  
  randomNumber = Math.random();
  randomValue = randomNumber * uppercase.length;
  randomIndex = Math.floor(randomValue);
  
  var fourthCharacter = uppercase[randomIndex];
  passwordStart = passwordStart + fourthCharacter;
}

console.log(passwordStart);

console.log(passwordStart.length);

var password = passwordStart;

for (var i = 0; i < passwordLength - passwordStart.length; i++) {

  randomNumber = Math.random();
  randomValue = randomNumber * alphabet.length;
  randomIndex = Math.floor(randomValue);
  password = password + alphabet[randomIndex];

}

console.log(password);

console.log(password.length);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
