//var c = 300
//{}--scope, function,conditional statements, object-constructor declaration
if (true) {
    let a = 10
    const b = 20
    var c=30
    
}
// console.log(a); //not defined will not print anything
// console.log(b); //same
// console.log(c); //30

// 1. var → Function Scope

// var does NOT follow block scope.

// function test() {
//     if (true) {
//         var x = 10;
//     }

//     console.log(x); // 10 ✅
// }

// Even though x was declared inside the if block, it is accessible outside the block because var is function-scoped.
// But outside the function:
// function test() {
//     var x = 10;
// }
// console.log(x); // Error ❌
// var → Function Scope

// 2. let → Block Scope
// A block means anything inside { }, such as if, for, while, etc.

// if (true) {
//     let x = 10;
//     console.log(x); // 10 ✅
// }

// console.log(x); // Error ❌

// x exists only inside the { }.

// Similarly:

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i); // Error ❌


// 3. const → Block Scope
// const also follows block scope, exactly like let.
// if (true) {
//     const x = 10;
//     console.log(x); // 10 ✅
// }

// console.log(x); // Error ❌

//########### var  ##############
// var c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     var c=30 ||c=30
//     }
//     console.log(c); //30

//######### let#########
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //10
    
}
//console.log(a);//300

//######### const#########
const b = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", b); //20
    
}
// console.log(b);//300


// console.log(a);
// console.log(b);
// console.log(c);

//Nested function
function one(){
    const username = "hitesh"

    //child function can access parent variable
 //twochota hai to wo bade one seice cream mang sakta h mtlab access kr sakta h
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); -- out of scope

     two() //hitesh

}

// one() ---will not print anything

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); //hitesh youtube
    }
    // console.log(website); //error
}

// console.log(username);//error


// ++++++++++++++++++ interesting ++++++++++++++++++

//addone(5)--will not print anything
// console.log(addone(5)) //6  --- access ho gya kyuki yaha humne function ko bs declaration diya

function addone(num){
    return num + 1
}



// addTwo(5) //error as  it cannot be accessed or yaha usko variable m hold kr diya h
//function declared under expression
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4)) //6