// Assignment Code
/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
// If the button is clicked, then prompts pop up
WHEN prompted for password criteria
THEN I select which criteria to include in the password
//user chooses password criteria
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
//var passwordLength = (8-128 characters)
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//var characterTypes = (lowercase, uppercase, numeric, and/or special characters)
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
//validate EACH input
//select >=1 character type
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
// If all prompts are answered, then generate password    (&&)?
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
//generated password shows in alert OR written to the page

need booleans for:
passwordLength 8-128 characters = true
characterTypes = true
all prompts answered = true


passwordLength uses array?  var passwordLength = [8-128]
characterTypes uses array?  var characterType = [lowercase, uppercase, numeric, special character]



function passwordLength = number(input)


/*math.floor(math.random() + (max - min + 1) + min)
get a random number between 2 number variable to store the selection

We need this to happen using the 


*/

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  alert ("password")


  passwordText.value = password;

  
}

function generatePassword() {
var length = 8-128;
const lowercase = "qwertyuiopasdfghjklzxcvbnm".split();
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM".split();
var numeric = ;
var specialCharacter = ;
  
  
  characterType
  length: 8-128,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacter: false,
  
  if (passwordLength === >8&&<128) {
    console.log("choose characters to include")
    else ()
    console.log("Please choose a value between 8 and 128")
  }



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

