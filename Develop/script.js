// Assignment Code
var generateBtn = document.querySelector("#generate");


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

const characterType = {
  length: length,
  lower: randomizeLower,
  upper: randomizeUpper,
  numeric: randomizeNumeric,
  specialCharacter: randomizeSpecialCharacter,
  };


//make sure order follows: global variables, functions, process

// user input between 8-128, repeat until user sets correct amount



//loop over length call generator function for each type
//add final password to the password var and return in alert

//Object containing 4 password criteria

  function generatePassword() {

    var length = prompt("Choose a password length between 8 and 128 characters.");
    if (length >= 8 && length <= 128) {
      confirm("Your password will contain lowercase characters.");
    } else {
      prompt("Choose a password length between 8 and 128 characters.");
    }
  
  var lowercasePrompt = confirm("Your password will contain lowercase characters.");
    if (lowercasePrompt === true) {
      confirm("Your password will contain uppercase characters.");
    } else {
      confirm("You must choose ok to continue generating a password.");
    }
  
  var uppercaseConfirm = confirm("Your password will contain uppercase characters.");
    if (uppercaseConfirm === true) {
      confirm("Your password will contain numeric characters.");
      } else {
      confirm("You must choose ok to continue generating a password.");
    }
  
  var numericConfirm = confirm("Your password will contain numeric characters.");
      if (numericConfirm === true) {
      confirm("Your password will contain special characters.");
    } else {
      confirm("You must choose ok to continue generating a password.");
    }
  
  var specialCharacterConfirm = confirm("Your password will contain special characters.");
    if (specialCharacterConfirm === true) {
      alert("You're randomly generated password is" + writePassword);
    } else {
      confirm("You must choose ok to continue generating a password.");
    };



var generatePassword = "";
  }




// Generator functions



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);