let input1 = document.querySelector('#input1');

let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');
let output = document.querySelector('#output');


increase.addEventListener("click", sizeIncrease);
decrease.addEventListener("click", sizeDecrease);

function sizeIncrease(){
    let size = window.getComputedStyle(output).getPropertyValue('font-size');
    console.log(size);
    let sizeBig = parseFloat(size);
    console.log(sizeBig);
    let newSize = (sizeBig + 2) +'px';
    console.log(newSize);
   
    output.innerText = input1.value;
    output.style.fontSize = newSize;

}

function sizeDecrease(){

    let size = window.getComputedStyle(output).getPropertyValue('font-size');
    let sizeBig = parseFloat(size);
    let newSize = (sizeBig - 2) +'px';

   
    output.innerText = input1.value;
    output.style.fontSize = newSize;
    
}