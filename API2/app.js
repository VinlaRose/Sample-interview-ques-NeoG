let input = document.querySelector('#input');
let button = document.querySelector('#btn');
let output = document.querySelector('#output');
var baseURL = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="

function getURL(Nameentered){
    return baseURL+Nameentered
}

function clickHandler(){
    let inputName = input.value;
    console.log(inputName);

    fetch(getURL(inputName))
       .then(resp => resp.json())
    .then(data => displayData(data))
        .catch(errorHandler)
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("something wrong with server: try again after some time")
}

button.addEventListener("click", clickHandler)

function displayData(data) {
    output.innerHTML = JSON.stringify(data.otp, null, 2);
  }