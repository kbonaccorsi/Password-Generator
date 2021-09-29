




// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  alert ("password")


  passwordText.value = password;

  
}

function generatePassword() {

  
  
  var characterType = {
  length: false,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacter: false,
  }
  
  if ( === true) {
    console.log("choose characters to include")
    else ()
    console.log("Please choose a value between 8 and 128")
  }

/* prompt: ("insert whatever text user should see")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

