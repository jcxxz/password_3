var generateBtn = document.querySelector("#generate");

var upperCase = [
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
    "Z"
];

var lowerCase = [
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
    "z"
    ];

var numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
    ];
var symbols = [
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
    "+",
    "-",
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
    "~"
    ];

var pwLength = "";
var characrterSet = "";
var confirmUpper = "";
var confirmLower = "";
var confirmNumber = "";
var confirmSymbol = "";



// Write password to the #password input
function writePassword() {
var length = prompt("How many characters would you like your password to contain?");
if (length < 8) {
    alert("Password must be at least 8 characters");
    writePassword();
} else if (length > 128) {
    alert("Password must be less than 128 characters");
    writePassword();
} else {
    console.log(length);
};

var newPw = "";
var confirmUpper = confirm("Do you want to use uppercase letters?");
var confirmLower = confirm("Do you want to use lowercase letters?");
var confirmNumber = confirm("Do you want to use numbers?");
var confirmSymbol = confirm("Do you want to use symbols?");


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

};

return newPw;
