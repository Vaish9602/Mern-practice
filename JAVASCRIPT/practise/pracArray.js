//reverse array

let arr=[1,2,3,4];
let start=0;
let end=arr.length-1;
while(start<end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp
    start++
    end--
}
console.log(arr)


//using reverse method
arr=[2,3,5,4]
console.log(arr.reverse())


//find maximum
arr=[73,85,74,74,94]
let max=arr[0]
for(let i=0; i<=arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)


//find minimum
let min=arr[0];
for(let i=0;i<=arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)


//find second largest 
let first=-Infinity;
let second=-Infinity
for(let num of arr){
    if(num>first){
        second=first;
        first=num;
    }else if(num>second && num!==first){
        second=num
    }
}
console.log(second)

//remove duplicate
let result=[];
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }
}
console.log(result)






// using another method
arr=[1,1,2,2,3,3]
console.log([...new Set(arr)])



// count frequency 
arr=[10,12,13,14,15,16,17,18,19]
let freq={}
for(let num of arr){
    freq[num]=(freq[num]||0)+1
}
console.log(freq)
// count words
let str="hello hello world"
let words=str.split(" ");
freq={}
for(let word of words){
    freq[word]=(freq[word]||0)+1

}
console.log(freq)

 // count the characters
 str="hello"
 let word=str.split('');
 freq={}
 for(let char of word){
    freq[char]=(freq[char]||0)+1
 }
 console.log(freq)
 






  