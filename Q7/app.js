let hide = document.querySelector('#hide');
let text = document.querySelector('#text');
let show = document.querySelector('#show');


hide.addEventListener("click", hideText);

function hideText(){
    
    document.getElementById("text").style.display = "none";
}

show.addEventListener("click", showText);

function showText(){
    
    document.getElementById("text").style.display = "block";
}