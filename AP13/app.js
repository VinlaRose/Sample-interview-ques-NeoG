let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let output = document.querySelector("#output")

var baseURL = "https://mock-practice.prakhar10v.repl.co/bollywood?name=";

button1.addEventListener("click", getURL1)

function getURL1(){
    baseURL1 = baseURL+YJHD;
    return clickHandler(baseURL1);
}

function clickHandler(baseURL0){
    

    fetch(baseURL0)
       .then(resp => resp.json())
    .then(data => displayData(data))
        .catch(errorHandler)
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("something wrong with server: try again after some time")
}



function displayData(data) {
    output.innerHTML = JSON.stringify(data);
  }
