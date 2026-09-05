// Immediately Invoked Function Expressions (IIFE)

function chai(){
     console.log(`DB CONNECTED`);
}
chai() //DB CONNECTED

//is equivalent to down function
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //DB CONNECTED

//()-- first parentheses function definition ()--second for execution call 
//GLOBAL SCOPE K POLLUTION SE DISTURB HOTI H FUNCTION SO TO PREVENT THE FUNCTION FROM IT WEUSE IIFE


function chai(name){
     console.log(`DB CONNECTED TO ${name}`);
}
chai("anshu")
//is equivalent to down function

//unnamed iife
( (name) => { //parameters
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //arguments