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

if(passwordLength >= 8 || passwordLength <= 128) {
  alert("You have chosen a password length of "+passwordLength+" characters.");
}

confirm("Click OK to include $peci@l characters.");

var special = ["!","@","#","$","%","&","*","?","+","="];
console.log(special);

var randomNumber=Math.random();
console.log("Random Number: "+randomNumber);

var randomValue = randomNumber*10;
console.log("Random Value: "+randomValue);

var withoutDecimals=Math.floor(randomValue);
console.log("Without decimals:"+withoutDecimals);

var special = ["!","@","#","$","%","&","*","?","+","="];
var randomNumber=Math.random();
var randomValue = randomNumber*special.length;
var randomIndex=Math.floor(randomValue);
console.log("Random special: "+special[randomIndex])













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
