
// var textAreaEl = document.getElementById("#password").autofocus;

var welcome;

var num1 = 5;
var num2 = 32;

var yes = true;

var textAreaEl = document.getElementById("form[3]");

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
    
    return (newPass);
};

function passwordGenSymbol() {
    
    symbols = "!@#{[]\:;?$%^&*()_+~`|}><,./-=';",
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    length = size;
    newPass = "";
    newPassSymbol = "";
    
    for (var i = 0, n = charSet.length; i < length; ++i) {
        newPassSymbol += charSet.charAt(Math.floor(Math.random() * n));
        console.log(i);    
    }
    for (var i = 0, s = symbols.length; i < length; ++i) {
        newPassSymbol += symbols.charAt(Math.floor(Math.random() * s));
        console.log(i);    
    }
    return (newPassSymbol);
};



var welcome = confirm("Welcome to Password Generator! Please enter all information in the boxes either 'yes' or 'no'");
if (welcome == true){    
    size = prompt("How many characters long will your password be? 5-32 characters accepted");
    if (size >= 5 && size <= 32){        
        theNewPass();
          
    }
        
    else {
        alert("needs to be 5-32 numbers");
        
        
    } 
    
    var symbolAsk = prompt("Want special characters?");
    if (symbolAsk == "yes"){
        passwordGenSymbol();
        theNewPass();        
        Element.setAttribute(textAreaEl, newPassSymbol);
        
        
        
    }
    else if (symbolAsk == "no"){
        passwordGen();
        alert(newPass)
    }
    
    else if (welcome || size || symbolAsk !== true) {
        alert("Maybe another time!")
    
    }
}
// passwordGen();
// alert(newPass)    