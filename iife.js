//********************Immediately Invoked Function Expressions (IIFE) ******************/


(function chai (){
    console.log(`Db connected`);
})(); // to end the iife semi-colon is necessary


(function aur (){
    console.log(`Db connected`);
})();


((name)=>{
    console.log(`db connected , ${name}`)
}
)("jenesh")


///iife is used to avoid global scope varaibles and declaration polutions

// to end the iife semi-colon is necessary



//js executions process
// let val1 = 10;
// let val2 = 5;
// function addNum(num1 , num2){
//     let total = num1 + num2;
//     return total;
// }

// let result1 = addNum(val1,val2);
// let result2 = addNum(2,2);
// console.log(result2);
// console.log(result1);