var welcome;

var num1 = 8;
var num2 = 128;

var yes = true;

function theNewPass(){
    
    console.log(size)
    console.log(symbolAsk)
}

function passwordGen() {
    
    charSet = "abcdefghijklmnopqrstuvwxyz";
    length = size;
    newPass = "";
        
    for (var i = 0, n = charSet.length; i < length; ++i) {
        newPass += charSet.charAt(Math.floor(Math.random() * n));
        console.log(i);    
    }
    
    return (newPass);
};

function passwordGenCaps() {
    
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    length = size;
    newPass = "";
    newPassCaps = "";
        
    for (var i = 0, n = charSet.length; i < length; ++i) {
        newPassCaps += charSet.charAt(Math.floor(Math.random() * n));
        console.log(i);    
    }
    
    return (newPassCaps);
};

function passwordGenSymbol() {
    
    charSet = "abcdefghijklmnopqrstuvwxyz!@#{[]\:;?$%^&*()_+~`|}><,./-=';";
    length = size;
    newPass = "";
    newPassSymbol = "";
    
    for (var i = 0, n = charSet.length; i < length; ++i) {
        newPassSymbol += charSet.charAt(Math.floor(Math.random() * n));
        console.log(i);    
    }

    return (newPassSymbol);
};

function passwordGenSymbolCaps() {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#{[]\:;?$%^&*()_+~`|}><,./-=';";
    length = size;
    newPass = "";
    newPassgernSymbolCaps = "";
        
    for (var i = 0, n = charSet.length; i < length; ++i) {
        newPass += charSet.charAt(Math.floor(Math.random() * n));
        console.log(i);    
    }
    
    return (newPassSymbolCaps);
};

function copyTextEl() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
};

var welcome = confirm("Welcome to Password Generator! Please enter all information in the boxes either 'yes' or 'no'");
if (welcome == true){    
    size = prompt("How many characters long will your password be? 8-128 characters accepted");
    if (size >= 8 && size <= 128){        
        theNewPass();
    }
    else {
        alert("needs to be 8-128 numbers")
        .clearfix();
    }
    var capsAsk = prompt("Would You like Capital letters included?(default is no caps)");
    if(capsAsk == "yes" && size >= 8 && size <= 128){
        passwordGenCaps();
        theNewPass();
        document.getElementById("password").innerHTML = newPassCaps;
    } 
    
    else alert("no caps, no problems!")

    var symbolAsk = prompt("Want special characters?");
    if (symbolAsk && capsAsk == "yes" && size >= 8 && size <= 128){
        passwordGenSymbol();
        theNewPass();        
        document.getElementById("password").innerHTML = newPassSymbol;
    }
    else if (size < 8 && size > 128 == true){
        alert("nice try!");
    }
     if (symbolAsk == "no" && capsAsk == "yes" && size >= 8 && size <= 128){
        passwordGenCaps();        
        document.getElementById("password").innerHTML = newPass;
       }
    else if (symbolAsk == "yes" && capsAsk == "no" && size >= 8 && size <= 128){
        passwordGenSymbol();        
        document.getElementById("password").innerHTML = newPass;
       }
    else if (welcome || size < 8 && size > 128 == true) {
        alert("Enjoy!");
    }
};
   