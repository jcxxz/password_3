var generateBtn = document.querySelector("#generate");

function getRadomValue(array) {
var randomValue = array[Math.floor(Math.random() * array.length)];
return randomValue;
}

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

var pwLength = "";
var characrterSet = "";


// Write password to the #password input
function writePassword() {
    var length = prompt("Choose a length between 8-128 characters");
    if (length < 8 || length > 128) {
      writePassword();
      alert("Password length is either too short or too long, try again");
      prompt("Choose a length between 8-128 characters");
    }
    console.log(length);
};

var confirmUpper = confirm("Do you want to use uppercase letters?");
var confirmLower = confirm("Do you want to use lowercase letters?");
var confirmNumber = confirm("Do you want to use numbers?");
var confirmSymbol = confirm("Do you want to use symbols?");
var password = "";

if (confirmuppercase) {
    passwordText = passwordText.concat(uppercase);
  }

  if (confirmlowercase) {
    passwordText = passwordText.concat(lowerCase);
  }

  if (confirmnumber) {
    passwordText = passwordText.concat(number);
  }

  if (confirmspecialchar) {
    passwordText = passwordText.concat(specialchar);
  }

if(confirmUpper === false 
    && confirmLower === false
    && confirmNumber === false
    && confirmSymbol === false) {
        alert("You must select at least one character type");
        writePassword();
    }

    var newPw = "";
    for (var i = 0; i < length; i++) {
        newPw += characrterSet.charAt(Math.floor(Math.random() * characrterSet.length));
    }
    console.log(newPw);

    var passwordText = document.querySelector("#password");
    passwordText.value = newPw;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);