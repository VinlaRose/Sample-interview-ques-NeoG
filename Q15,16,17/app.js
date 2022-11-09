

let person1 = {
    name: "Ram",
    age: 25,
    yuga: "Treta",
    power: 2500

}
let person2 = {
    name : "Krishna",
    age: 31,
    yuga: "Dwapar",
    power: 2325

}

function moreAge(a,b){
   if(a.age > b.age){
    return a.name;
   }else{
    return b.name;
   }
}

function morePower(a,b){
    if(a.power > b.power){
     return a.name;
    }else{
     return b.name;
    }
 }

 function newMorePower(a,b){
    let newPow1 = a.power + a.name.length;
    let newPow2 = b.power + b.name.length;
    if(newPow1>newPow2){
        return a.name;
    }else{
        return b.name;
    }

 }


console.log(moreAge(person1, person2));
console.log(morePower(person1, person2));
console.log(newMorePower(person1,person2));



 