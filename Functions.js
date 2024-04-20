// // function addTwoNumber(num1,num2){// num1 and num2 are parameters 
// //     console.log(num1+=num2);

// // }

// // addTwoNumber(2,2);// 2 and 2 are the arguments



// function addNumbers (num1,num2){

//     let result = num1 + num2;
//     return result;
// }

// const result = addNumbers (2,2);

// console.log("result:" ,result);


// function loginMessage(userName){
//     return `${userName} just logged in`
// }

// console.log(loginMessage("jenesh raj udash"));


function loginUser(userName = "Ram"){
    if(!userName){
        console.log("please enter the username ");
        return;
    }
    return `${userName} just logged in`
}

console.log(loginUser("shyam"))