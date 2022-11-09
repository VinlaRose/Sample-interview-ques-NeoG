let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

let addition = document.querySelector('#add');
let substraction = document.querySelector('#sub');
let multiplication = document.querySelector('#multi');
let division = document.querySelector('#divide');
let output = document.querySelector('#output');

addition.addEventListener("click", addition = () => {
    let sum = Number(input1.value) + Number(input2.value);
    output.innerText = `sum is ${sum}`;
    console.log(sum);

})

substraction.addEventListener("click", substraction = () => {
    let sub = Number(input1.value) - Number(input2.value);
    output.innerText = `difference is ${sub}`;
    console.log(sub);
    
    })


multiplication.addEventListener("click", multiplication = () => {
    let product = Number(input1.value) * Number(input2.value);
    output.innerText = `product is ${product}`;
    console.log(product);
    
    })
division.addEventListener("click", division = () => {
    let quot = Number(input1.value) / Number(input2.value);
    output.innerText = `${input1.value}/${input2.value} =  ${quot}`;
    console.log(quot);
    
    })
    
    
