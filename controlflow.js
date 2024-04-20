//********Control Flow*******/
// const userName = "jenesh";

// if(userName === "name"){
//     console.log("jenesh");
// }
// else{
//     console.log("not true")
// }


// const temp = 21;
// if(temp>=50){
//     console.log("its hot outside");
// }
// else {
//     console.log("its freezing outside");
// }


// const balance = 1000;
// if(balance >=500) console.log("test pass")  // implicate scope (cant use multiple line should be used in single line).


// if(balance >=500 ) {
//     console.log(`yes test pass your balance is ${balance}`);
// }



// const userLoggedIn = true;
// const debitCard = false;

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy from cart");
// }
// else {
//     console.log("not allowed to buy")
// }


//********Switch***********/

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1:
        console.log("janaury");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;

    default:
        console.log("default case match")
        break;
}

// Note : if break is not used in the cases and if the condition gets true in the remaining all the case result will be executed expected the default case so break should be used in the cases 

//Falsy Values : 
// false , 0 ,-0 ,null , undefined , "" , 0n, NaN


//Truthy Values :
//  "0"(if under string then true) , "false"(if under string then true) , " "(if under string then true),function (){}(empty function and the value for this is true)

// To check any empty object : 
// const emptyObj = {}

//     if (Object.keys(emptyObj).length === 0){
//         console.log("object is empty ")
//     }
// else {
//     console.log("object is not empty ")
// }


// Nullish coalescing operator(??): null undefined


//terniary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80? console.log("less than 80") : console.log("more than 80");