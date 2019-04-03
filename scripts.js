// JavaScript source code

document.getElementById("MyParagraph").innerHTML = "Hello javascript";
document.getElementById("MyBigParagraph").style.fontSize = "60px";

function HideText(){
    document.getElementById("HidenParagraph").style.display = "none";
    }
function ShowText(){
        document.getElementById("HidenParagraph").style.display = "block";
}


function WriteInTab() {
    document.getElementById("EmptyParagraph").innerHTML = "JS is here";
}
function WriteInHtml() {
    document.write("JS is here");
}
function WriteInAlertBox(){
    alert("JS is here");
}
function WriteInConsoleLog(){
    console.log("JS is here");
}

var MyButton = document.getElementById("MyButton");

MyButton.addEventListener(
    "click",
    function () {
        alert("HELLO");
    }
);
