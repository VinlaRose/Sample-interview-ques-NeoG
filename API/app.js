// const baseURL = "https://api.sampleapis.com/cartoons/cartoons2D";
// const baseURL = "https://stock-api.desaihetav.repl.co/list";
//const baseURL = "https://jsonplaceholder.typicode.com/todos";
var baseURL = "https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD"
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data))
  .catch(errorHandler)


function errorHandler(error){
    console.log("error occurred", error);
    alert("something wrong with server: try again after some time")
}
function displayData(data) {
  document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
}