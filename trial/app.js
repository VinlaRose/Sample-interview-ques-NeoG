let objects = [
     {
        name: "vinla",
        age: 16,
        haveCycle: true
    },
    {
        name: "pinky",
        age: 11,
        haveCycle: true
    },
   {
        name: "rach",
        age: 18,
        haveCycle: true
    }

]

for(let i=0; i<3; i++){
    if(objects[i].age > 12 && objects[i].haveCycle === true){
        console.log(objects[i].name);
    }
}



