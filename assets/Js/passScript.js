
// var textAreaEl = document.getElementById("#password").autofocus;

var welcome;

var num1 = 5;
var num2 = 32;

var yes = true;

function theNewPass(){
    console.log(size)
    console.log(symbolAsk)
}
function passwordGen() {
    
    symbols = "!@#{[]\:;?$%^&*()_+~`|}><,./-=';",
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    length = size;
    newPass = "";
    
    for (var i = 0, n = charSet.length; i < length; ++i) {
        newPass += charSet.charAt(Math.floor(Math.random() * n));
        console.log(i);    
    }
    return newPass;
};
function passwordGenSymbols() {
    
    symbols = "!@#{[]\:;?$%^&*()_+~`|}><,./-=';",
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    length = size;
    newPass = "";
    
    for (var i = 0, n = charSet.length + symbols.length; i < length; ++i) {
        newPass += symbols.charAt(Math.floor(Math.random() * n));
        console.log(i);    
    }
    return newPass;
};

var welcome = confirm("Welcome to Password Generator", "Please enter all information in the boxes either 'yes' or 'no'");
if (welcome == true){    
    size = prompt("How many characters long will your password be? 5-32 characters accepted");
    if (size >= 5 && size <= 32){
        passwordGen();
        theNewPass();
        
        
    }
        
}

var symbolAsk = prompt("Want special characters?");
if (symbolAsk === "yes"){
    passwordGenSymbols();
    theNewPass();
    alert(newPass)
    
    
}

else if (length !== true){
    alert("needs to be 5-32 numbers");
    
    
} 
else if (welcome || length !== true) {
    alert("Maybe another time!")
    
}
// passwordGen();
// alert(newPass)    