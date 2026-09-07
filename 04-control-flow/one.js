// if
/*if(condition){
    // code to execute if condition is true
}else{
    // code to execute if condition is false
}*/

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


//Scope of control flow statements
// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`); //User power: fly
// }

// console.log(`User power: ${power}`); //power is not defined


// const balance = 1000
// if (balance > 500) console.log("test"); //test - implicit scope
// if (balance > 500) console.log("test"),console.log("test2"); //test,test2


//Nesting conditions
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

//&& buth statements should be true
// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

//|| either statement should be true
// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }