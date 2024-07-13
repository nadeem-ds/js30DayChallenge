

// Task
// Declare a variable using  var and assign into number and print the log
var number = 20
console.log("Number",number)
// Declare a variable using  let and assign into string and print the log
let name = "Nadeem"
console.log("Name",name)

// Declare a variable using  const and assign into boolean and print the log
const work_done = true
console.log("Is Work done ",work_done)


// Declare a variable using  different data type and assign into different value and print the log and typeof
var data1 = 23
console.log("DATA1",data1)
console.log(typeof(data1)) //number

var data2 = "anystring"
console.log("DATA1",data2)
console.log(typeof(data1)) //string

var data3 = false
console.log("DATA1",data3)
console.log(typeof(data3)) //boolean

var data4 = ["a","b","c","d"]
console.log("DATA1",data4)
console.log(typeof(data4))  //object beacuse type of array is object

var data5 = {name:"sohan",age:"23"}
console.log("DATA1",data5)
console.log(typeof(data5)) //object

//Decalre a variable using let and re-assign into value

let borrow = 400
console.log("First",borrow)

borrow = 500
console.log("After",borrow)


//declare a variable using const and re-assign into see the error and observe

const amount = 100
console.log("Amount",amount)
amount= 200
console.log("Amount",amount) //TypeError: Assignment to constant variable. 
//reassign is not allowed into const date type