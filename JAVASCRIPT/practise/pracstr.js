//Reverse a String
let str="hello"
let rev="";
for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
}
console.log(rev)
//reverse string another way
rev= str.split('').reverse().join('');
console.log(rev)

//Check Palindrome String
str="madam";
rev=str.split('').reverse().join('');
if(str===rev){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}
//Count Vowels in String
str="icecream"
let count=0;
let word=str.split("")
for(let char of word){
    if("aieou".includes(char)){
        count++
    }

}
console.log(count)
//Count Characters Frequency
str="hello hello world";
let freq={};
words=str.split(" ");
for(let word of words ){
    freq[word]=(freq[word]||0)+1;
}
console.log(freq)
//Remove Spaces from String
str= " javascript "
console.log(str.trim())
//Find Longest Word in String
str="i am learning react";
let longest="";
words=str.split(" ");
for(let word of words){
    if(words.length>longest.length){
        longest=word
    }
}
console.log(longest)
//Remove Duplicate Characters
str="rutujayjijarudr"
let result="";
let str1=str.split("");
for(let char of str1){
    if(!result.includes(char)){
        result+=char
    }
}
console.log(result)
//Count Words in a String
str="jay rutu rudr jija";
words= str.split(" ");
count=0;
freq={}
for(let word of words){
    freq[word]=(freq[word]||0)+1
    count++;
}
console.log(count)

//Find Duplicate Character
str="aasassaaasdfghh";
freq={}
word=str.split('');
for(let char of word){
    freq[char]=(freq[char]||0)+1;

}
for(let key in freq){
    if(freq[key]>1){
        console.log(key)
    }
}
//Convert First Letter to Capital
str="vaishnavi"
console.log((str.charAt(0).toUpperCase())+str.slice(1))
//Check String Contains Substring
str="javascript"
console.log(str.includes('script'))

//Find First Occurrence of Characters
console.log(str.indexOf('a'));
//Find Last Occurrence
console.log(str.lastIndexOf('a'));
//Convert String to Array
console.log(str.split(','))
//Check Ends With
console.log(str.endsWith('script'))
////Remove Extra Spaces
str="          sd    "
console.log(str.trim())
//Replace Word in String
str=" hello hi";
console.log(str.replace("hi","welcome"))
//Repeat String
console.log(str.repeat(4))
//Extract Part of String
str="hello"
console.log(str.slice(1,3))
//1Convert String Case
str="JAVASCRIPT"
console.log(str.toLowerCase())
console.log(str.toUpperCase())

////Find ASCII Value
console.log("A".charCodeAt(0))
//Convert ASCII to Charac
//