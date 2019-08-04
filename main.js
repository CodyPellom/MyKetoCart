
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


var y = 0;
const backgroundArea = document.getElementById("landerImage");
backgroundArea.style.backgroundImage= "url('./images/Skillet-Chicken-Fajitas-photo-recipe-picture-1-13.jpg')";

function dynamicBackground() {
y++
if (y % 2){
    backgroundArea.style.backgroundImage= "url('./images/spicy-BBQ-chicken-salad-recipe-4.jpg')";
}
else {
    backgroundArea.style.backgroundImage= "url('./images/Skillet-Chicken-Fajitas-photo-recipe-picture-1-13.jpg')";
}
}
setInterval(dynamicBackground, 3000);
