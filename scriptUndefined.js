// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomNumber;
var randomValue;
var randomIndex;

function randomCharacter(array) {
  randomNumber = Math.random();
  randomValue = randomNumber * array.length;
  randomIndex = Math.floor(randomValue);
}

function generatePassword() {

  var passwordLength;

  var alphabet = [];
  
  var passwordStart = "";

  passwordLength = prompt("How many characters would you like your password to contain?");

  if (passwordLength < 8) {
    alert("Minimum password length is 8 characters.");
    passwordLength = prompt("How many characters would you like your password to contain?");
  }

  if (passwordLength > 128) {
    alert("Maximum password length is 128 characters.");
    passwordLength = prompt("How many characters would you like your password to contain?");
  }

  if (passwordLength <= 7 || passwordLength >= 129) {
    alert("Minimum password length is 8 characters. Maximum password length is 128 characters.");
    passwordLength = prompt("How many characters would you like your password to contain?");
  }

  if (passwordLength >= 8 || passwordLength <= 128) {
    alert("You have chosen a password length of " + passwordLength + " characters.");
    console.log(passwordLength);
  }

  var specialCharacters = confirm("Click OK to include $peci@l characters.");

  if (specialCharacters == true) {
    var special = ["!", "@", "#", "$", "%", "&", "*", "?", "+", "="];

    alphabet.push.apply(alphabet, special);

    randomCharacter(special);

    var firstCharacter = special[randomIndex];
    passwordStart = passwordStart + firstCharacter;
  }

  var numericChararacters = confirm("Click OK to include numeric characters.");

  if (numericChararacters == true) {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

    alphabet.push.apply(alphabet, numbers);

    randomCharacter(numbers);

    var secondCharacter = numbers[randomIndex];
    passwordStart = passwordStart + secondCharacter;
  }

  var lowercaseCharacters = confirm("Click OK to include lowercase characters.");

  if (lowercaseCharacters == true) {
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    alphabet.push.apply(alphabet, lowercase);

    randomCharacter(lowercase);

    var thirdCharacter = lowercase[randomIndex];
    passwordStart = passwordStart + thirdCharacter;
  }

  var uppercaseCharacters = confirm("Click OK to include UPPERCASE characters.");

  if (uppercaseCharacters == true) {
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    alphabet.push.apply(alphabet, uppercase);

    randomCharacter(uppercase);

    var fourthCharacter = uppercase[randomIndex];
    passwordStart = passwordStart + fourthCharacter;
  }

  var password = passwordStart;

  // console.log(password);
  // console.log(parseInt(passwordLength));
  // console.log(password.length);
  // console.log(parseInt(passwordLength) - passwordStart.length)


  for (var i = 0; i < (parseInt(passwordLength) - passwordStart.length); i++) {

    randomCharacter(alphabet);

    password = password + alphabet[randomIndex];

  }

  console.log(password);
  console.log(password.length);

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var generate = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generate;

}