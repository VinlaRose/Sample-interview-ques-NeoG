let input1 = document.querySelector('#input1');

let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let green = document.querySelector('#green');
let output = document.querySelector('#output');


red.addEventListener("click", redColor);
blue.addEventListener("click", blueColor);
green.addEventListener("click", greenColor);

function redColor(){
    let input = input1.value;
    output.innerHTML = `<h1>${input}</h1>`;
    
    output.style.color = 'red';
    

}

function blueColor(){ 
    
    let input = input1.value;
    output.innerHTML = `<h1>${input}</h1>`;
    
    output.style.color = 'blue';
    

}
function greenColor(){
    
   
    let input = input1.value;
    output.innerHTML = `<h1>${input}</h1>`;
    
    output.style.color = 'green';
    
    

}




