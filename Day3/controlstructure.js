// Day 3 solution
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
//Question 1 check no is positive or negative
let no = 10;
if(no>=0){
    if(no == 0){
        console.log("No is zero")
    }else{
        console.log("No is positive")
    }
}else{
    console.log("No is negative")
}

//Question 2 check eligible for voter
let age = 20;
if(age>=18){
    console.log("you are eligible")
}else{
    console.log("You are not eligible")
}

//Question 3
let a = 90;
let b = 50;
let c = 40;
let large ;
if (a>b && a>c){
    // large = a;
    console.log("A is greather among these",a)
}else if (b>a && b>c){
    // large = b;
    console.log("B is greather among these",b)
}else{
   console.log("C is greather among these",c)
}

//Question 4 on switch case

let day;
switch(5){
    case 0:
        day = "sunday"
        console.log("Today is sunday")
        break;
    case 1:
        day = "monday"
        console.log("Today is monday")
        break;
    case 2:
        day = "tuesday"
        console.log("Today is tuesday")
        break;
    case 3:
        day = "wednesday"
        console.log("Today is wednesday")
        break;
    case 4:
        day = "thurday"
        console.log("Today is thurday")
        break;
    case 5:
        day = "friday"
        console.log("Today is friday")
        break;
    case day=="sat":
        console.log("Today is saturday")
        break;
    default:
        console.log("NO day")
}


//Question grading  5
let grade = 'F';
switch(grade){
    case 'A':
        console.log("Your grade is A")
    break;
    case 'B':
        console.log("Your grade is B")
    break;
    case 'C':
        console.log("Your grade is C")
    break;
    case 'D':
        console.log("Your grade is D")
    break;
    case 'F':
        console.log("Your grade is F")
    break;
}

//Question 6 terniary operator to check even or odd
let num = 11;
{num%2===0 ? console.log("Even"):console.log("Odd")}

//Question  7 check year is leap or not
let year = 2024;
if ((year % 4 == 0 && year %100 !=0) || year %400 == 0){
   console.log(`This ${year} is leap year`)
}else{
   console.log(`This ${year} is not leap year`)
}