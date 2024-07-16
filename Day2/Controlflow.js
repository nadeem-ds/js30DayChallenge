
let a= 40;
let b = 20

//Arithmetic operator
console.log("Adding",a+b) //task 1
console.log("Sub",a-b) //task 2
console.log("Mul",a-b) //task 3
console.log("divide",a/b) //task 4
console.log("Module",a%b) //task 5

//Assignment operator

let c = 20
c += 10;
console.log(c)  //task 6

let d = 40;
d -= 30
console.log(d)  //task 7

//comparison operator
let e = 30;
let f = 20;
console.log("e is greather than f",e>f)  //task 8
console.log("f is less than e",f<e)

let g= 10;
let h = 20;
console.log("g is less or equal to h",g<=h) //task 9
console.log("g is grearher or equal to h", g>=h);

let i = 90
let j = '90'
console.log(" i and j are equal without checking data type",i==j) //true

console.log(" i and j are equal with checking data type",i===j) //false


//Logical operator && || !

if(5>2 && 2<6){
    console.log("Both case true so it will run")
}

if(5>2 || 4>9){
    console.log("one  case true so it will run ")
}

if (!false){
    console.log("reversing the false to true")
}

//Ternary operator
console.log(10>4?"yes":"No")