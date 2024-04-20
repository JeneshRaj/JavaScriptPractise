// singleton objects
// if objects are created with literal then it can not be sigleton objects 
// but if the objects are with constructor then it always a sigleton objects


// Objects literals
//objects.create //constructor objects

const mySym = Symbol("Key1"); ///Symbols

const jsUser = {
    name : "jenesh Raj Udash",
    age : 20,
    [mySym] : "myKey1",//always use square brackets to use symbol
    location : "ktm",
    email : "jenesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "jenesh@hotmail.com";
// console.log(jsUser);

// Object.freeze(jsUser);
// jsUser.email = "jenesh@chatgpt.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JsUser");
}

jsUser.greeting2 = function(){
    console.log(`hello , ${this.name}`);
}

console.log(jsUser.greeting2());