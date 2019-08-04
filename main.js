
const HamMenu = document.getElementById("HamburgerMenu");
var menuIcon = document.getElementById("cart-logo");

var firstDisplay = HamMenu.style.height = "0px";

var x = 0;
function menuClick() {
    x++;
    if (x % 2){
    firstDisplay = HamMenu.style.height = "50px"; 
}
    else {
        firstDisplay = HamMenu.style.height = "0px";
    }
}

