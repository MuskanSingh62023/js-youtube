// singleton
// Object.create //constructor method 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",//this cannotbe accessed by dot operator
    //mySym : "mykey1", incorrect way but it will not used as symbol datatype
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Accessing the values of objects
// console.log(JsUser.email) //hitesh@google.com
// console.log(JsUser["email"]) //hitesh@google.com
// console.log(JsUser["full name"]) //Hitesh Choudhary
//console.log(JsUser.mySym) it will print string
// console.log(JsUser[mySym]) //mykey1


//Changing values of objects
// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //it will freeze the object means after that we cant change the object
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);
/*{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'mykey1' //agar direct declare krte toh ye symbol nhi btata
}*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
//To reference a same object we use this keyword
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//console.log(JsUser.greeting); //undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
/*Hello JS user
undefined
Hello JS user, Hitesh
undefined*/