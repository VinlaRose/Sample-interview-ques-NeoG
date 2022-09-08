let input1 = document.querySelector('#input1');

let head1 = document.querySelector('#head1');
let head2 = document.querySelector('#head2');
let head3 = document.querySelector('#head3');
let output = document.querySelector('#output');


head1.addEventListener("click", sizehead1);
head2.addEventListener("click", sizehead2);
head3.addEventListener("click", sizehead3);

function sizehead1(){
    
    let input = input1.value;
    output.innerHTML = `<h1>${input}</h1>`;
    

}

function sizehead2(){
    
    let input = input1.value;
    output.innerHTML = `<h2>${input}</h2>`;
    

}
function sizehead3(){
    
    let input = input1.value;
    output.innerHTML = `<h3>${input}</h3>`;
    

}




