// Q1 write a program print no 1 to 0 using for loop

for (let i =1 ;i<=10;i++){
    console.log(`Number is ${i}`)
}
console.log("------------------------------------")

// Q2 multiplication table of 5 using for loop

for (let i = 1 ;i<=10 ;i++){
    console.log(` 5 * ${i} = `,5*i)
}
console.log("------------------------------------")

// Q3 calculate the sum of number from 1 to 10 using while loop

let no = 1;
let sum = 0;
while(no<=10){
    sum = sum + no;
    no++;
}
console.log("The sum is ",sum)
console.log("------------------------------------")

//Q4 write a program to print 10 to 1 with using while

let n = 10;
while (n>0){
    console.log("No is ",n)
    n--;
}
console.log("------------------------------------")

//Q5 print 1 to 5 using do while loops
let Num = 1;
do{
    console.log(Num)
    Num++;
}
while(Num<=5);

//Q6 calculate the factroial of number using do while
let fnum = 4;
let res = 1;
do{
    res = res*fnum;
    fnum--;
}while(fnum>=1)
console.log("Fact no is ",res)

console.log("------------------------------------")

//Q7 write a program to pring the pattern

for (let i =1 ;i<=5;i++){
    let space = " ";
    for(let j=1;j<=i;j++){
        space = space+"*"+""
    }
    console.log(space)

}
