// Assignment Code

var generateBtn = document.querySelector("#generate");
console.log("#generate");

// GLOBAL password variable options
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialchar = ["!", "@", "#", "$", "%", "&", "?"];

// GLOBAL confirm variables for prompts
var length = "";
var confirmlowercase;
var confirmuppercase;
var confirmnumber;
var confirmspecialchar;

function writePassword() {
  // length prompt
  var length = prompt("Choose a length between 8-128 characters");
  if (length < 8 || length > 128) {
    writePassword();
    alert("Password length is either too short or too long, try again");
    prompt("Choose a length between 8-128 characters");
  }
  console.log(length);

  // confirming password paramaters
  var confirmlowercase = confirm(
    "Click OK if you want to include lowecase letters in your password"
  );
  console.log(confirmlowercase);

  var confirmuppercase = confirm(
    "Click OK if you want to include uppercase letters in your password"
  );
  console.log(confirmuppercase);

  var confirmnumber = confirm(
    "Click OK if you want to include numbers in your password"
  );
  console.log(confirmnumber);

  var confirmspecialchar = confirm(
    "Click OK if you want to include special characters in your password"
  );
  console.log(confirmspecialchar);

  var passwordText = [];

  // lowercase
  if (confirmlowercase) {
    passwordText = passwordText.concat(lowercase);
  }
  // uppercase
  if (confirmuppercase) {
    passwordText = passwordText.concat(uppercase);
  }
  // number
  if (confirmnumber) {
    passwordText = passwordText.concat(number);
  }
  // special character
  if (confirmspecialchar) {
    passwordText = passwordText.concat(specialchar);
  }

  // If no choices are made
  if (
    !confirmlowercase &&
    !confirmuppercase &&
    !confirmnumber &&
    !confirmspecialchar
  ) {
    alert("You must choose a criteria, try again");
    writePassword();
  }

  // setting length of password
  var newPassword = "";
  for (var i = 0; i < length; i++) {
    var password =
      passwordText[Math.floor(Math.random() * passwordText.length)];
    newPassword += password;
  }

  var password = newPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return passwordText;
}

// function copy() {
//   let copyText = document.querySelector("#generate");
//   copyText.select();
//   document.execCommand("copy");
// }

// document.querySelector("#generate").addEventListener("click", copy);


// event listener to generate button
generateBtn.addEventListener("click", writePassword);