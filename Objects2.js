const tinderUser1 = new Object(); //Singleton Object
const tinderUser = {} // Non-singleton Object

tinderUser.id = "12abc"
tinderUser.name = "jenesh"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//specailly used when u work on database like ecom and hotel booking app
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));

const regularUser = {
    email : "jenesh@gmail.com",
    fullName : {
        userFullName:{
            firstName: "jenesh",
            lastName : "udash"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {
    name: "jenesh",
    age: 20

}

const obj2 = {
    name1 :"puja",
    age1 : 10
}

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)



const obj3 = {...obj1, ...obj2}  //using spread operators
console.log(obj3)


const users = [
    {
        id:1,
        email: "jenesh@gmail.com"
    }
]