// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = prompt("Choose a password length between 8 and 128 characters.");
if (length <8) {
  prompt("Choose a password length between 8 and 128 characters.");
}else if (length >128) {
  prompt("Choose a password length between 8 and 128 characters.");
}else {
  confirm("My password should contain lowercase letters.")
};


//User inputs length of password 8-128: prompt method
//User says yes to different character types: confirm method
//loop over length call generator function for each type
//add final password to the password var and return in alert

//Object containing 4 password criteria
const characterType = {
  length: randomizeNumeric,
  lower: randomizeLower,
  upper: randomizeUpper,
  numeric: randomizeNumeric,
  specialCharacter: randomizeSpecialCharacter,
  };


  function generatePassword (length, lower, upper, numeric, specialCharacter) {
    var length = [];
for (var i=8; i <=128; i++){
  length.push(i);
    };



var generatePassword = "";





// Generator functions

function randomizeLower() {
  const lowercase = "qwertyuiopasdfghjklzxcvbnm";
  return lowercase [Math.floor(Math.random() * lowercase.length)];
}

function randomizeUpper() {
  const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  return uppercase [Math.floor(Math.random() * uppercase.length)];
}

function randomizeNumeric() {
  const digits = "1234567890";
  return digits [Math.floor(Math.random() * digits.length)];
}

function randomizeSpecialCharacter() {
  const characters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  return characters [Math.floor(Math.random() * characters.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

alert(writePassword);
}