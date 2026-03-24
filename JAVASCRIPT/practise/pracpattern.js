//right triangle
/*

*
**
***
****
*****




*/
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}

/*
Inverted Right Triangle
*****
****
***
**
*



*/
console.log("Inverted Right Triangle")
for(let i=5;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}
/*
Square Pattern
*****
*****
*****
*****
*****

*/
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=5;j++){
        row+="*";
    }
    console.log(row)
}
/*

Pyramid (Centered)
    *
   *** //2*i-1
  *****  |
 *******
*********



*/
let n=5;
for(let i=1;i<=n;i++){
    let row="";
    //spaces
    for(let j=1;j<=n-i;j++){
        row+=" "
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*"
    }
    console.log(row)
}
/*
Inverted Pyramid
*******
 *****
  ***
   *


*/
console.log("inverted pyramid");
n=5;
for(let i=5;i>=1;i--){
    let row="";
    for(let j=1;j<=n-i;j++){
        row+=" ";

    }
    for(let k=1;k<=2*i-1;k++){
        row+="*"
    }
    console.log(row)
}
/*
Increasing Number Triangle
1
12
123
1234
12345




*/
console.log("increasing number triangle");
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=j
    }
    console.log(row)
}
/*

Same Number Triangle
1
22
333
4444
55555


*/
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=i;
    }
    console.log(row)
}

//alphabet
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=String.fromCharCode(64+i)
    }
    console.log(row)

}

//increasing alphabet
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+= String.fromCharCode(64+j)
    }
    console.log(row);
}

//diamond
n=5
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<n-i;j++){
        row+=" ";

    }
    for(let k=1;k<=2*i-1;k++){
        row+="*"
    }
    console.log(row)
}
 for(let i=n;i>=1;i--){
    let row="";
    for(let j=1;j<=n-i;j++){
         row+=" "
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*"
    }
    console.log(row)
 }


