// Reverse a string using a for loop.
let str="hello";
let reverse="";
for(let i=str.length-1;i>=0;i--){
    reverse+=str[i]

}
console.log(reverse)

// Reverse a string using built-in JavaScript methods.
reverse= str.split('').reverse().join('');
console.log(reverse)

// Check whether a string is a palindrome or not
str="madam"
reverse= str.split('').reverse().join('');
if(str===reverse){
    console.log("palindrome")
}else{
    console.log("not")
}




// Count the number of vowels in a string.
str="vaishnavi";
let count=0
let word=str.split("");
for(let char of word){
    if("aieou".includes(char)){
        count++
    }


}
console.log(count)


// Count the frequency of words in a string.
str="hello hello world"
let freq={}
let words=str.split(" ");
for(let word of words){
    freq[word]=(freq[word]||0)+1

}
console.log(freq)


// Remove leading and trailing spaces from a string.
str="         javascript    "
console.log(str.trim())

// Find the longest word in a given sentence.
str="i am learning javascript"
let longest=""
words= str.split(" ");
for(let word of words){
    if(word.length>longest.length){
        longest=word
    }
}
console.log(longest)


// Remove duplicate characters from a string.
str="aaaabbbbccc"
let result="";
 
for(let char of str ){
    if(!result.includes(char)){
        result+=char
    }
}
console.log(result)

// Count the number of words in a sentence.
str="hello hello  world";
freq={}
words=str.split(" ");
for(let word of words){
    freq[word]=(freq[word]||0)+1

}
console.log(freq)



// Find duplicate characters in a string.
str="aaabbbbnnmm"
freq={}
for(let word of str){
    freq[word]=(freq[word]||0)+1


}
for(let key in freq){
    if(freq[key]>1){
        console.log(key)
    }
}

// Convert the first letter of a string to uppercase.
str="asdffg";
console.log(str.charAt(0).toUpperCase()+ str.slice(1))

// Check if a string contains a specific substring.
console.log(str.includes("ffg"))

// Find the first occurrence of a character in a string.
console.log(str.indexOf('f'));

// Find the last occurrence of a character in a string.
console.log(str.lastIndexOf('f'))

// Convert a string into an array.
console.log(str.split())

// Check if a string ends with a specific substring.
console.log(str.endsWith("ffg"))

// Remove extra spaces from a string.
console.log(str.trim())

// Replace a word in a string with another word.
str='mango'
console.log(str.replace('mango','apple'))

// Repeat a string multiple times.
console.log(str.repeat(4))


// Extract a part of a string using slice.
console.log(str.slice(1,3))

// Convert a string to lowercase and uppercase.
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// Find the ASCII value of a character.
console.log("A".charCodeAt(0))

// Convert an ASCII value to a character.
//console.log(string.fromCharCode(64))

// Reverse an array **without using the `reverse()` method**.
let arr=[1,2,3,4];
let start=0;
let end=arr.length-1;
while(start<end){
    let temp=arr[start]
    arr[start]=arr[end];
    arr[end]=temp
    start++;
    end--;

}
console.log(arr)
// 2. Reverse an array using the **built-in `reverse()` method**.
arr=[3,4,56]
console.log(arr.reverse())
// 3. Find the **maximum element** in an array.
let max=arr[0];
for(let i=0;i<=arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)
// 4. Find the **minimum element** in an array.
let min=arr[0];
for(let i=0;i<=arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)
// 5. Find the **second largest element** in an array without sorting.
let first =-Infinity;
let second=-Infinity;
for(let num of arr){
    if(num>first){
        second=first;
        first=num
    }else if(num>second && num!==first){
        second=num
    }
}
console.log(second)

// 6. Remove **duplicate elements from an array without using `Set`**.
arr=[2,2,3,4,4,2]
result=[];
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }
}
console.log(result)
// 7. Remove **duplicate elements from an array using `Set`**.
console.log([...new Set(arr)])
// 8. Count the **frequency of elements in an array**.
arr=[1,1,1,2,2,3,3,4]
freq={}
for(let num of arr){
    freq[num]=(freq[num]||0)+1;
}
console.log(freq)


// Print all elements of a 2D array (matrix).
 arr = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];
for(let i=0;i<arr.length;i++){
    let row="";
    for(let j=0;j<arr[i].length;j++){
        row+=arr[i][j]+ " ";

    }
    console.log(row);
}






// Find the sum of all elements in a matrix.
let sum=0;
for(let i=0;i<arr.length;i++){
   
    for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j]
    }
}
console.log(sum)

// Find the sum of each row in a matrix.
for(let i=0;i<arr.length;i++){
    let row=0;
    for(let j=0;j<arr[i].length;j++){
        row+=arr[i][j]
    }
    console.log(row)
    
}

// Find the sum of each column in a matrix.
for(let i=0;i<arr.length;i++){
    let col=0;
    for(let j=0;j<arr[0].length;j++){
        col+=arr[j][i]
    }
    console.log(col)
}

// Print the primary diagonal elements of a matrix.
for(let i=0;i<arr.length;i++){
    console.log(arr[i][i])
}

// Print the secondary diagonal elements of a matrix.
let n=arr.length
for(let i=0;i<arr.length;i++){
    console.log(arr[i][n-i-1])
}

// Reverse each row of a matrix.
for(let i=0;i<arr.length;i++){
    console.log(arr[i].reverse())
}

// Find the transpose of a matrix.
for(let i=0;i<arr.length;i++){
    let row="";
    for(let j=0;j<arr.length;j++){
        row+=arr[j][i]+" "
    }
    console.log(row)
}






// Print numbers from 1 to N.
for(let i=1;i<=5;i++){
     console.log(i)
}

// Print numbers from N to 1.
for(let i=5;i>=1;i--){
    console.log(i)
}

// Find the sum of numbers from 1 to N.
sum=0
for(let i=0;i<=5;i++){
    sum+=i
}
console.log(sum)

// Find the factorial of a number.
let fact=1;
for(let i=1;i<=5;i++){
    fact*=i;
}
console.log(fact)

// Print the multiplication table of a number.
num=12;
for(let i=1;i<=10;i++){
    console.log(num,"X",i,"=",num*i)
}

// Reverse a given number.
num=1234;
reverse=0
while(num>0){
    let digit= num%10;
    reverse= (reverse*10)+digit;
    num=Math.floor(num/10)
}
console.log(reverse)

// Check whether a number is palindrome or not.
num=121;
let org=num
reverse=0;
while(num>0){
    let digit=num%10;
    reverse=(reverse*10)+digit;
    num=Math.floor(num/10)
}
console.log(org==reverse?"palindrome":"not")

// Count the number of digits in a number.
num=1234;

count=0
while(num>0){
    let digit= num%10;
    count++;
    num=Math.floor(num/10)

}
console.log(count)
// Check whether a number is an Armstrong number.
num=153
sum=0;
org=num;
while(num>0){
    let digit=num%10;
    sum+=digit*digit*digit
    num=Math.floor(num/10)
}
console.log(org==sum?"amg":"not")

// Print the Fibonacci series up to N terms.
count=1
let a=0;
let b=1;
num=10;
while(count<=num){
    console.log(a);
    let next=a+b;
    a=b
    b=next
    count++
}
console.log(count)

// Check whether a number is prime or not.
function isPrimeOrNot(num){
    if(num<=1) return false
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;

}
console.log(isPrimeOrNot(7))

// Find the first, second, and last digit of a number.
num=123;
let lastDigit= num%10;
let secondDigit=Math.floor(num/10)%10
let firstDigit=Math.floor(num/100)
console.log(lastDigit,secondDigit,firstDigit)
// Print a right triangle star pattern.
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}

// Print an inverted right triangle star pattern.
for(let i=5;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}

// Print a square star pattern.
for(let i=1;i<=5;i++){
    let row=""
    for(let j=1;j<=5;j++){
        row+="*"
    }
    console.log(row)
}

// Print a centered pyramid star pattern.
n=5;
for(let i=1;i<=5;i++){
    let row="";
    for(j=1;j<=n-i;j++){
        row+=" "
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*"
    }
    console.log(row)

}


// Print an inverted pyramid star pattern.
n=5
for(let i=5;i>=1;i--){
    let row="";
    for(let j=1;j<=n-i;j++){
        row+=" "
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*"
    }
    console.log(row)
}

// Print an increasing number triangle pattern.
for(let i=1;i<=5;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row+=j
    }
    console.log(row)
}

// Print a same number triangle pattern.
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=i
    }
    console.log(row)
}

// Print an alphabet triangle pattern.
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=String.fromCharCode(64+j)
    }
    console.log(row)
}

// Print an increasing alphabet triangle pattern.
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=String.fromCharCode(64+i)
    }
    console.log(row)
}

// Print a diamond star pattern.

// Write a program for FizzBuzz (print “Fizz”, “Buzz”, or “FizzBuzz” based on divisibility).

// Check whether a year is a leap year or not.

// Find the largest among three numbers.

// Write a grade calculator based on marks.

// Check whether a number is even or odd.

// Check whether a number is positive, negative, or zero.

// Create a simple calculator using switch case for +, -, *, /.

// Check whether a person is eligible for voting based on age.

// Write a login validation program that checks username and password.