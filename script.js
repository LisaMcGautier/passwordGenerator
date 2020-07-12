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













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
