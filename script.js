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
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    ":",
    ";",
    "'",
    "<",
    ">",
    "?",
    "/",
    "`",
    "~",
    ];

// Write password to the #password input
function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a number between 8 and 128.");
        return;
    };

    var passwordUpperCase = confirm("Would you like to include uppercase letters?");
    var passwordLowerCase = confirm("Would you like to include lowercase letters?");
    var passwordNumbers = confirm("Would you like to include numbers?");
    var passwordSpecial = confirm("Would you like to include special characters?");

    if (passwordLowerCase === false && passwordUpperCase === false && passwordNumbers === false && passwordSpecial === false) {
        alert("Please select at least one character type.");
        return;
    }

    var passwordOptions = [];
    if (passwordLowerCase === true) {
        passwordOptions = passwordOptions.concat(lowercase);
    }
    if (passwordUpperCase === true) {
        passwordOptions = passwordOptions.concat(uppercase);
    }
    if (passwordNumbers === true) {
        passwordOptions = passwordOptions.concat(numbers);
    }
    if (passwordSpecial === true) {
        passwordOptions = passwordOptions.concat(special);
    }

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * passwordOptions.length);
        var randomCharacter = passwordOptions[randomIndex];
        password = password + randomCharacter;
    }
    return password;
}

