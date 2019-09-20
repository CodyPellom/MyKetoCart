// var y = 0;
// const backgroundArea = document.getElementById("landerImage");
// backgroundArea.style.backgroundImage= "url('./images/Skillet-Chicken-Fajitas-photo-recipe-picture-1-13.jpg')";
// function dynamicBackground() {
// y++
// if ( y >= 6 ){
//     y = 0;
// }

// if ( y == 1 ){
//     backgroundArea.style.backgroundImage= "url('./images/KetoFood-1.png')";
// }
// else if ( y == 2 ) {
//     backgroundArea.style.backgroundImage= "url('./images/KetoFood-2.png')";
// }
// else if ( y == 3 ){
//     backgroundArea.style.backgroundImage= "url('./images/KetoFood-3.png')";
// }
// else if ( y == 4 ){
//    backgroundArea.style.backgroundImage = "url('./images/KetoFood-4.png')"; 
// }
// else if ( y == 5 ){
//     backgroundArea.style.backgroundImage = "url('./images/KetoFood-5.png')"; 
    
// }
// }
// setInterval(dynamicBackground, 3000);


var landingPageArea = document.getElementById("mainLandingSection");
landingPageArea.style.backgroundImage = "url('./images/Keto-LP-WideImg-1.png')";
x = 0;
function dynamicLandingBackground(){
    x++;
    if (x >= 6){
        x = 0;
    }
    else if (x == 1){
        landingPageArea.style.backgroundImage = "url('./images/Keto-LP-WideImg-1.png')";
        landingPageArea.classList.add ="landing-page-wide-img";
    }
    else if (x == 2){
        landingPageArea.style.backgroundImage = "url('./images/Keto-LP-WideImg-2.png')";
        landingPageArea.classList.add ="landing-page-wide-img";
    }
    else if (x == 3){
        landingPageArea.style.backgroundImage = "url('./images/Keto-LP-WideImg-3.png')";
        landingPageArea.classList.add ="landing-page-wide-img";
    }
    else if (x == 4){
        landingPageArea.style.backgroundImage = "url('./images/Keto-LP-WideImg-4.png')";
        landingPageArea.classList.add ="landing-page-wide-img";
    }

}
setInterval(dynamicLandingBackground, 4000);
