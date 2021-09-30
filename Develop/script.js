//https://www.w3schools.com/html/html_charset.asp

// Generator functions

function lower() {
  const lowercase = "qwertyuiopasdfghjklzxcvbnm";
  return lowercase [Math.floor(Math.random() * lowercase.length)];
}

function upper() {
  const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  return uppercase [Math.floor(Math.random() * uppercase.length)];
}

function numeric() {
  const digits = "1234567890";
  return digits [Math.floor(Math.random() * digits.length)];
}

function specialCharacter() {
  const characters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  return characters [Math.floor(Math.random() * characters.length)];
}
console.log(lower());
console.log(upper());
console.log(numeric());
console.log(specialCharacter())