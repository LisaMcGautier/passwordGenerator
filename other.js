// Assignment Code
var generateBtn = document.querySelector("#generate");


//DECLARING A FUNCTION:

var randomNumber;
var randomValue;
var randomIndex;

    function randomCharacter (array) {
        randomNumber = Math.random();
        randomValue = randomNumber * array.length;
        randomIndex = Math.floor(randomValue);
    }
      

        // var character = array[randomIndex];

        // return character;
    
    randomCharacter(special);

    randomCharacter(numbers);

    randomCharacter(lowercase);

    randomCharacter(uppercase);

    randomCharacter(alphabet);




    //  EXPERIMENTED WITH DIFFERENT WAYS TO MEET MINIMUM AND MAXIMUM CHARACTERS.
    //  LATER REALIZED THAT THE NEW JS FILE I CREATED WAS NOT LINKED TO THE HTML DOCUMENT, 
    //  AND THEREFORE NONE OF THE CHANGES WERE REFLECTED IN THE BEHAVIOR OF THE PAGE! 


// if(passwordLength < 8 || passwordLength > 128) {
//   alert("Minimum password length is 8 characters. Maximum password length is 128 characters.");
//   passwordLength = prompt("How many characters would you like your password to contain?");
//   console.log(passwordLength);

//   if(passwordLength < 8 || passwordLength > 128) {
//     alert("Minimum password length is 8 characters. Maximum password length is 128 characters.");
//     passwordLength = prompt("How many characters would you like your password to contain?");
//   }
// }

// else if(passwordLength === "") {
//     alert("You must specify a number of characters.");
//     passwordLength = prompt("How many characters would you like your password to contain?");
// }

// var passwordLength = prompt("How many characters would you like your password to contain?");
//   console.log(passwordLength);

// if(passwordLength < 8) {
//   alert("Minimum password length is 8 characters.");
//   passwordLength = prompt("How many characters would you like your password to contain?");
//   console.log(userInput);
// }
// else if(passwordLength = prompt("How many characters would you like your password to contain?"); > 128) {
//   alert("Maximum password length is 128 characters.");
//   passwordLength = prompt("How many characters would you like your password to contain?");
//   console.log(userInput);
// }

// if(passwordLength < 8 || passwordLength > 128) {
//   alert("Minimum password length is 8 characters. Maximum password length is 128 characters.");
//   passwordLength = prompt("How many characters would you like your password to contain?");
//   console.log(passwordLength);

//   if(passwordLength < 8 || passwordLength > 128) {
//     alert("Minimum password length is 8 characters. Maximum password length is 128 characters.");
//     passwordLength = prompt("How many characters would you like your password to contain?");
//   }
// }
// else {
//   alert("You must specify a number of characters.");
//   passwordLength = prompt("How many characters would you like your password to contain?");
// }

// if(passwordLength !== number) {
//   alert("You must enter a number.")
// }


// alert("You have chosen a password length of "+passwordLength+" characters.")


    // USED A PROCEDURE DEMONSTRATED IN CLASS TO GENERATE A RANDOM INDEX FROM EACH OF THE CHARACTER ARRAYS.


// var randomNumber = Math.random();
// console.log("Random Number: "+ randomNumber);

// var randomValue = randomNumber * 10;
// console.log("Random Value: " + randomValue);

// var withoutDecimals = Math.floor(randomValue);
// console.log("Without decimals:" + withoutDecimals);

// var special = ["!","@","#","$","%","&","*","?","+","="];
// console.log(special);

// var newArray = [];
// newArray.push.apply(newArray, dataArray1);
// newArray.push.apply(newArray, dataArray2);

    
    // USED RANDOM CHARACTER GENERATOR TO CREATE FIFTH, SIXTH, SEVENTH, AND EIGHTH CHARACTER.
    // HOWEVER, THIS WILL NOT WORK IF THE USER DOES NOT SELECT ALL CHARACTER TYPES.


// randomNumber = Math.random();
// randomValue = randomNumber * special.length;
// randomIndex = Math.floor(randomValue);
// console.log("Random special: " + special[randomIndex]);

// var fifthCharacter = special[randomIndex];

// randomNumber = Math.random();
// randomValue = randomNumber * number.length;
// randomIndex = Math.floor(randomValue);
// console.log("Random number: " + number[randomIndex]);

// var sixthCharacter = number[randomIndex];

// randomNumber = Math.random();
// randomValue = randomNumber * lowercase.length;
// randomIndex = Math.floor(randomValue);
// console.log("Random lowercase: " + lowercase[randomIndex]);

// var seventhCharacter = lowercase[randomIndex];

// randomNumber = Math.random();
// randomValue = randomNumber*uppercase.length;
// randomIndex = Math.floor(randomValue);
// console.log("Random uppercase: " + uppercase[randomIndex]);

// var eighthCharacter = uppercase[randomIndex];

// console.log(firstCharacter + secondCharacter + thirdCharacter + fourthCharacter + fifthCharacter + sixthCharacter + seventhCharacter + eighthCharacter);


// FOUND A PIECE OF CODE THAT RE-DEFINED THE ARRAY "ALPHABET" 


// if (specialChar == true && numbersChar == true && lowercaseChar == true && uppercaseChar == true) {
//   alphabet = [special + numbers + lowercase + uppercase]
// }


// TRIED TO GENERATE A SINGLE RANDOM CHARACTER FROM THE ENTIRE ALPHABET;
// INSTEAD, CONSOLE LOGGED THE ENTIRE ALPHABET!


// randomNumber = Math.random();
// randomValue = randomNumber * alphabet.length;
// randomIndex = Math.floor(randomValue);
// console.log("Random character: " + alphabet[randomIndex]);

// randomNumber = Math.random();
// randomValue = randomNumber * alphabet.length;
// randomIndex = Math.floor(randomValue);
// console.log(alphabet[randomIndex]);


// console.log(firstCharacter + secondCharacter + thirdCharacter + fourthCharacter + fifthCharacter + sixthCharacter + seventhCharacter + eighthCharacter);

//  EXPERIMENTING WITH "FOR LOOP"


// for(var i = 0; i < 8; i++) {
//   randomNumber = Math.random();
//   randomValue = randomNumber * alphabet.length;
//   randomIndex = Math.floor(randomValue);
//   console.log(alphabet[randomIndex]);
// }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
