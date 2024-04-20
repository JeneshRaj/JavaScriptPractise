function addCartPrice(num1,num2,...num){
return num;
}

console.log(addCartPrice(200,300,400,500));


const user = {
    userName : "jenesh",
    price : 200
}

function handleObject(anyobject){
    console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username :"ram",
//     price : 250
// })


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[2];

}
console.log(returnSecondValue(myNewArray))