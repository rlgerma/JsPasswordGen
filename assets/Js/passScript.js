// Create array for allowed letters, numbers, and symbols in password
// Create objects with functions for each button
// Create go to bed........

// var textAreaEl = document.getElementById("#password").autofocus;

var symbols = "!@#{[]\:;?$%^&*()_+~`|}><,./-=';";
var newPass = "";
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var length = 0-32;

// var welcome = confirm("Welcome to Password Generator", "Please enter all information in the boxes followed by an 'enter' key to get started");

// var charSize = prompt("How many characters long will your password be?")

// var specChar = prompt("Would you like special characters in your password?");

// var numChar = prompt("How about adding some numbers too?");

// var capChar = prompt("Should it be case sensitive?");

var input = document.querySelector('#textarea')

next.addEventListener("keydown", function (e){
    var key = e.keyCode
if (e.key === 13){
    console.log(input)
}
});


function passwordGen() {
    
    for (var i = 0, n = charset.length; i < length; ++i) {
        newPass += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


