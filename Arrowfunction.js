// Arrow Functions *************** This**************
// this is refers to current context

const user = {
    userName : "jenesh",
    price : 999,

    welcomeMsg : function (){
        console.log(`${this.userName}, welcome to the website`);
        // console.log(this);
    }

}
// user.welcomeMsg()
// user.userName = "ram";
// user.welcomeMsg()


// console.log(this);


// function chai (){
//     let userName = "jenesh"
//     console.log(this.userName);
// }
// chai() op: undefined


// const chai = ()=>{
//     let userName = "shyam";
//     console.log(this);
// }
// chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

const chai  = (num1, num2) => (num1 + num2) //emplicate return method mostly used in react

console.log(addTwo(3,3));


