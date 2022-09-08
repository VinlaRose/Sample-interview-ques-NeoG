let hide = document.querySelector('#hide');
let text = document.querySelector('#text');
let show = document.querySelector('#show');
let text2 = document.querySelector('#text2');
document.getElementById("text2").style.display = "none";

hide.addEventListener("click", hideText);

function hideText(){
    
    document.getElementById("text").style.display = "none";
}

show.addEventListener("click", showText);

function showText(){
    
    document.getElementById("text2").style.display = "block";
}