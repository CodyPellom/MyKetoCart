var blockOne = document.getElementById("body-display-square-one");
var blockOneHeader = document.getElementById("body-display-square-one-h1");
var blockOnePTag = document.getElementById("body-display-square-one-p");
blockOneHeader.style.display = "none";
blockOnePTag.style.display = "none";
blockOne.onmouseover = function(){
    blockOne.style.background = "purple";
    blockOneHeader.style.display = "block"
    blockOnePTag.style.display = "block";
    blockOneHeader.style.color = "white";
    blockOnePTag.style.color = "white";
    
}
blockOne.onmouseleave = function(){
    blockOne.style.backgroundImage = "./images/KetoFood-1.png";
    blockOneHeader.style.display = "none"
    blockOnePTag.style.display = "none";

    
    
}