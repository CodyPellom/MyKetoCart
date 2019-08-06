
var y = 0;
const backgroundArea = document.getElementById("landerImage");
backgroundArea.style.backgroundImage= "url('./images/Skillet-Chicken-Fajitas-photo-recipe-picture-1-13.jpg')";
function dynamicBackground() {
y++
if ( y >= 6 ){
    y = 0;
}

if ( y == 1 ){
    backgroundArea.style.backgroundImage= "url('./images/KetoFood-1.png')";
}
else if ( y == 2 ) {
    backgroundArea.style.backgroundImage= "url('./images/KetoFood-2.png')";
}
else if ( y == 3 ){
    backgroundArea.style.backgroundImage= "url('./images/KetoFood-3.png')";
}
else if ( y == 4 ){
   backgroundArea.style.backgroundImage = "url('./images/KetoFood-4.png')"; 
}
else if ( y == 5 ){
    backgroundArea.style.backgroundImage = "url('./images/KetoFood-5.png')"; 
    
}
}
setInterval(dynamicBackground, 3000);
