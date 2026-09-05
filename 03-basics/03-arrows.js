const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //this prints current context
        console.log(this);
    }

}

// user.welcomeMessage() 
// //hitesh , welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

user.username = "sam"
user.welcomeMessage() 
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// console.log(this);
//{}--node me h so global object empty h
//but browser ke andr it will print window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)) //7

//Implicit Return
// const addTwo = (num1, num2) =>  num1 + num2 //7

// const addTwo = (num1, num2) => ( num1 + num2 ) //no need of return key word

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()