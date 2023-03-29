// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

generateBtn.addEventListener("click", writePassword);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

var pwLength = "";
var characrterSet = "";


// Write password to the #password input
function writePassword() {
    var length = prompt("Choose a length between 8-128 characters");
    if (length < 7 || length > 35) {
      writePassword();
      alert("Password length is too short or too long, try again");
      prompt("Choose a length between 8-128 characters");
    }
    console.log(length);
};

var confirmUpper = confirm("Do you want to use uppercase letters?");
var confirmLower = confirm("Do you want to use lowercase letters?");
var confirmNumber = confirm("Do you want to use numbers?");
var confirmSymbol = confirm("Do you want to use symbols?");
var password = "";

if(confirmUpper) {
    characrterSet += upperCase;
    console.log(characrterSet);
}

if(confirmLower) {
    characrterSet += lowerCase;
    console.log(characrterSet);
}

if(confirmNumber) {
    characrterSet += numbers;
    console.log(characrterSet);
}

if(confirmSymbol) {
    characrterSet += symbols;
    console.log(characrterSet);
}

if(!confirmUpper&& !confirmLower && !confirmNumber && !confirmSymbol) {
        alert("You must select at least one character type");
        writePassword();
    }

    var newPw = "";
    for (var i = 0; i < length; i++) {
        newPw += characrterSet.charAt(Math.floor(Math.random() * characrterSet.length));
    };
    console.log(newPw);

    var password = newPw;
    var passwordText = document.querySelector("#password");
    passwordText.value = newPw;
 
    return passwordText;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

