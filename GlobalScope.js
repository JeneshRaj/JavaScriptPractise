//scopes

 //{} is a scopes which comes with the functions or if and else.
 // Note : scope can be different  on browser scope acts different and on code environment with node scope acts different.


 let a = 300;
if(true){
    let a = 20;
    const b = 10;
    // var c = 30;
}


console.log(a);
// console.log(b);
// console.log(c);