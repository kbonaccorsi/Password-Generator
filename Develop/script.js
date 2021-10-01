// Assignment Code
var generateBtn = document.querySelector("#generate");

//all characters that will go into the password
const lowercase = "qwertyuiopasdfghjklzxcvbnm".split("");
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM".split ("");
const numeric = "1234567890".split("");
const symbol = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var passwordArr = [];

//function that will generate a password based on multiple inputs from the user
function generatePassword() {

  var length = prompt("Choose a password length between 8 and 128 characters.");

  if (length <= 8 || length >= 128) {
    alert("Choose a password length between 8 and 128 characters.");
    generatePassword();
  } else {
    
    var lowercasePrompt = confirm("Do you want your password to contain lowercase characters?");
    if (lowercasePrompt === true) {
      alert("Your password will contain lowercase characters.");
      // add lowercase characters to the array
    passwordArr.push(...lowercase);
    } else {
      alert("Your password will NOT contain lowercase characters.");
    };

    var uppercasePrompt = confirm("Do you want your password to contain uppercase characters?");
    if (uppercasePrompt === true) {
      alert("Your password will contain uppercase characters.");
      // add uppercase characters to the array
    passwordArr.push(...uppercase);
    } else {
      alert("Your password will NOT contain uppercase characters.");
    };

    var numericPrompt = confirm("Do you want your password to contain numeric characters?");
    if (numericPrompt === true) {
      alert("Your password will contain numeric characters.");
      // add numeric characters to the array
    passwordArr.push(...numeric);
    } else {
      alert("Your password will NOT contain numeric characters.");
    };
  
    var symbolPrompt = confirm("Do you want your password to contain symbol characters?");
    if (symbolPrompt === true) {
      alert("Your password will contain symbol characters.");
      // add numeric characters to the array
    passwordArr.push(...symbol);
    } else {
      alert("Your password will NOT contain symbol characters.");
    };
  };
  
  
  passwordArr= "";


return passwordArr[Math.floor(Math.random() * passwordArr.length)];



  //loop through the passwordArr
  //add each character which got randomized to the generatePassword arr
  

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);