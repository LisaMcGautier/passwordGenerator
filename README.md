# passwordGenerator
homework3

7/12
Started by creating a variable to hold the user input from the prompt, "How many characters would you like your password to contain?"

Created conditional statements to confirm that the number chosen is at least 8 and no more than 128.

Created an alert to confirm the user's chosen number of characters.

Still trying to work out how to ensure that the user input is a number and NOT a string...

Created a confirm to ask if user wants to "include special characters?"

Created an array "special" to include 10 special characters and log them to console.

Created steps to select a random character from the array "special" and log to console.

Created 3 seperate confirms to ask if user wants to "include numeric characters?" "include lowercase characters?" and "include uppercase characters?"

Created 3 arrays, "number", "lowercase", and "uppercase" and logged to console.

Created steps to generate a random character from each of numeric, lowercase, and uppercase arrays.

Concatenated the first four characters, one from each array, and logged to console.

7/13

Using the same structrue as the first four characters, created steps to generate the next four characters.

Created conditional variables, based on user input from confirm pop-ups.

However, if the user does not select all four types of characters, the code does not work.

Created an "alphabet" array to include each of the four types of characters.

Will need to adjust the "alphabet" based on user input, and make the process for selecting the characters more efficient.

Created an array "alphabet" to contain the types of characters selected by the user.

Tried creating a for loop to generate random characters from the alpahbet... and broke my code.

Including the changes in the JS file, but commented out.

Also discovered that the variable created by the prompt "passwordLength" is viewed by JS as a string... trying to understand how to convert the variable to a number.

Not comprehending the Internet search results yet... not giving up!

Used previously created lines to create a total of 8 random characters which log to console.  However, this only works of all character types are selected AND the user chooses and 8 character password.

Going to experiment with streamlining this by combining firstCharacter and fifthCharacter; secondCharacter and sixthCharacter; thirdCharacter and seventhCharacter; and fourthCharacter to achieve the same result.

First, tried creating first and fifth characters (etc.) at the same time, but ended up doubling the same random character.

Rearranged the code to create firstCharacter and fifthCharacter; secondCharacter and sixthCharacter; thirdCharacter and seventhCharacter; and fourthCharacter in the same steps.

Also attempted to log a single random character from the alphabet, but ended up logging the entire alphabet to the console.

Progress, but not yet meeting the criteria of the project.

Deactivated fifth through eighth characters.

Corrected the for loop to generate remaining random characters.

7/14

Generated the password as a string, as opposed to 4 characters and a list of random characters.

Changed the first "password" variable to "passwordStart" to allow for user input (number and types of characters).

Original code build on the assumption that the user would select all 4 types, but the resulting password did not meet criteria.

Also, cleaned up some of the code, removing commented out portions to another JS file.

Next steps will include removing numerous console.logs to clarify the code bank.

Commented out console.logs of alphabet arrays and random characters generated.

Corrected text of uppercaseCharacters confirm from "lowercase" to "UPPERCASE" (A product of copy & paste!)

Further reduced the number of console.logs by commenting them out.

Replaced repetetive code blocks with function "randomCharacter."


Successfully generated a password to the dialog box on the webpage.

Realizing, in retrospect, that much of my code could have been written within the "generatePassword" function that was in the original script.js assignment.

Because the code runs at this point, I am hesitant to refactor the page before the due date tomorrow.

7/15

Spent several hours today rearranging the code blocks inside the "generatePassword" function.

I think I now have a webpage that is working as expected.

In a subsequent commit, I will also include additional JS files that I have created as backups to my working file.

![Screenshot (273)](https://user-images.githubusercontent.com/62854999/87585081-7f431a00-c6ac-11ea-966d-167c809d44f0.png)
![Screenshot (272)](https://user-images.githubusercontent.com/62854999/87585114-8c600900-c6ac-11ea-87c5-a41bba2e95a6.png)

Cleaned up the code in the "script.js" file.

Attached function.js, backup.js, beforeClass.js, and other.js; all documents which were created in the pursuit of this project.

Watching other students debug their code helped me realize that if the user does not choose any of the character types, the password will generate "undefined."

Created if statements to avoid this issue.

Realized that I saved the updated JS file as scriptFix, which broke the link with index.html.

Renamed files for clarity.

 https://github.com/LisaMcGautier/passwordGenerator
 https://lisamcgautier.github.io/passwordGenerator/
