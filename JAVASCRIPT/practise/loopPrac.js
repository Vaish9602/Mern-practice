// 1 to N
let n=10
for(let i=1;i<=n;i++){
    console.log(i)
}


//  n to 1
n=1;
for(let i=10;i>=n;i--){
    console.log(i)
}



//sum of n
let sum=0;
for(let i=0;i<=10;i++){
    sum+=i;
}
console.log(sum)


// Factorial of a Number
let fact=1;
for(let i=1;i<=5;i++){
    fact*=i;
}
console.log(fact)


//Multiplication Table ⭐⭐⭐
let num=5;
for(let i=1;i<=10;i++){
    console.log(num ,"X" ,i,"=",num*i)
}



//Reverse a Number 
num=5678;
let reverse=0;
while(num>0){
    let digit=num%10;
    reverse=(reverse*10)+digit;
    num=Math.floor(num/10)
}
console.log(reverse)


//Palindrome Number
num=121;
reverse=0
let org=num;
while(num>0){
    let digit=num%10;
    reverse=(reverse*10)+digit;
    num=Math.floor(num/10)
}
let result= (org=== reverse)? "palindrome":"not";
console.log(result)

    
//Count Digits in a Number
let count=0;
num=123445;
while(num>0){
    let digit=num%10;
    count++
    num=Math.floor(num/10)
}
console.log(count)





//Armstrong Number
num=153;
sum=0;
org=num;
while(num>0){
    let digit=num%10;
    sum+=digit*digit*digit;
    num=Math.floor(num/10)
}
console.log(sum===org?"amg":"not")

//Fibonacci Series
count=1;
a=0;
b=1;
num=10;
while(count<=num){
    console.log(a);
    let temp =a+b;
   
    a=b;
    b=temp;
    count++
}
console.log(count)
//Prime Number

function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true
}
console.log(isPrime(7))

// find first second third number
num =123
let lastDigit= num%10
console.log(lastDigit)
let secondDigit=Math.floor(num/10)%10
console.log(secondDigit)
let firstDigit=Math.floor(num/100);
console.log(firstDigit)