// 1️⃣ FizzBuzz ⭐⭐⭐ (Very Very Common)
let num=15;
if(num%3==0 && num%5==0){
    console.log("fizzbuzz")
}else if(num%3==0){
    console.log("fizz")
}else if(num%5==0){
    console.log("buzz")

}
    

//// 2️⃣ Leap Year Check ⭐⭐⭐
let year=2003;
if((year%4==0 && year%100!==0)||year%400==0){
    console.log("leap year")
}else{
    console.log("not leap year")
}

// 3️⃣ Largest of Three Numbers ⭐⭐⭐
let a=10;
let b=30;
let c=9;
if(a>b && a>c){
    console.log("a is greater")
}else if(b>a && b>c){
    console.log("b is greater")
}else{
    console.log("c is greater")
}
// 4️⃣ Grade Calculator
let marks=90;
if(marks>=90){
    console.log("grade A")

}else if(marks>= 75 && marks<=89){
    console.log("grade B")
}else if(marks>=60 && marks<=74){
    console.log("grade c")
}else if(marks>=45 && marks<=59){
    console.log("grade D")

}else{
    console.log("fail")
}
// 5️⃣ Even or Odd ⭐⭐⭐
num=25;
if(num%2==0){
    console.log("even")
}else{
    console.log("odd")
}
// 6️⃣ Positive / Negative / Zero 
num =-32
if(num> 0){
    console.log("positive")
}else if(num<0){
    console.log("negative")
}else{
    console.log("zero")
}

// 7️⃣ Simple Calculator (Switch Case) 
let op="+";
switch(op){
    case "+" :
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;

    case "/":
        console.log(a/b);
        break;
    default:
        console.log("Invalid operation")
    

}
 //Voting Eligibility
 let age=56;
 if(age>=18){
    console.log("eligible")
 }else{
    console.log("Not")
 }
 //Login Validation 
 let userName="abc";
 let password=123;
 let user="abc"
 let pass=23;
 if(userName== user && password== pass){
    console.log("login successfully")
 }else{
    console.log("Not")
 }