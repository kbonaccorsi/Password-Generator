// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  const length = [];
  for (var i=8; i < 129; i++){
      length.push(i);
  };
  const lowercase = "qwertyuiopasdfghjklzxcvbnm".split();
  const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM".split();
  const numeric = "1234567890".split();
  const specialCharacter = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
