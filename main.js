/* Global Variables Start */
var landingSection = document.getElementById('landing-section');

/* Global Variables End */

/* Landing Page Slides Start */
function intervalMaker(){
function slideOne(){ landingSection.style.backgroundImage = "url(./images/landing-page-slider/slide-two.png)";}
function slideTwo(){ landingSection.style.backgroundImage = "url(./images/landing-page-slider/slide-three.png)";}
function slideThree(){ landingSection.style.backgroundImage = "url(./images/landing-page-slider/slide-four.png)";}
function slideFour(){ landingSection.style.backgroundImage = "url(./images/landing-page-slider/slide-five.png)";}
function slideFive(){ landingSection.style.backgroundImage = "url(./images/landing-page-slider/slide-six.png)";}
setInterval(slideOne, 5000);
setInterval(slideTwo, 10000);
setInterval(slideThree, 15000);
setInterval(slideFour, 20000);
setInterval(slideFive, 25000);
}
setTimeout(intervalMaker, 5000);
/* Landing Page Slides End */