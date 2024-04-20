//datatype conversions

let score  = "20";


console.log(typeof score);
console.log(typeof(score));

let valueInNumber =  Number(score);
console.log(typeof valueInNumber);


//33abc = NaN(Not a number) but type is always a number
//true = 1 and false =0 


let isLoggedIn = "jenesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log( booleanIsLoggedIn)

//1 = true or 0 = false
// "jenesh" = true ;
//null = false ;



let someNumber = 33
let stringNumber =  String(someNumber);

console.log(stringNumber);

console.log(typeof stringNumber)