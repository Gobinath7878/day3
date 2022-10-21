// for loop itration in JSON
var numbers = [ 10, '20', 30, 'India', 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}

// for in loop
var person = {
    firstname: "Virat ",
    lastname: "Kohli",
    age: 33,
    team:"India"
}; 
 for (let z in person) {
    console.log(z + ": "+ person[z])
 }

// for of loop

var code=["HTML","CSS","JAVASCRIPT","C","C++"]
for(var index of code){
    console.log(index)
}

//forEach Loop

let foo=["ram","gobu","gokul","guna"]

foo.forEach((element)=>console.log("Today"+" "+element+" "+"is present "))



