//Nested Scope


// function one (){
//     const UserName = "jenesh";
   
//     function two(){
//         const webSite ="youtube";
//         console.log(UserName);

//     }
//     // console.log(webSite);

//     two();
// }
//  one();




 if(true){
    const userName = "jenesh";
    if(userName === "jenesh"){
        const website = "youtube";
        console.log(userName + website);
    }
    // console.log(website);
 }

//  console.log(userName);

//**************interesting************ */

function addOne(value){
    return value +1;

}

console.log(addOne(5))


const addTwo = function (num ){
    return num + 2 ;

}

addTwo(5)




