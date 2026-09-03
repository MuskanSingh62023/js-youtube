
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName--only this will not print anything as this is only reference
 //sayMyName()
/*H
I
T
E
S
H*/

//  function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
//  }
//  const result =addTwoNumbers(3,5) //8
//  //Undefined means functions is not returning anything
//  console.log("Result:",result); //Result: undefined
//addTwoNumbers -- NaN
//addTwoNumbers(3,"a")--3a
//addTwoNumbers(3,null)--3
//addTwoNumbers(3,4)
//7

//function ki defination me parameters pass hote hai
// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2
//     // return result //return function aate hi uske aage wali line print nhi hogi and iska scope bs function parentheses tk hi hoga
//     return number1 + number2
// }
//jab function ko call karte h to arguments pass karte hai
// const result = addTwoNumbers(3, 5)
 // console.log("Result: ", result);//Result:8


 
// function loginUserMessage(username = "sam"){
//     return `${username} just logged in`
// }

//it will return value as mentioned in function but will not print anything
//loginUserMessage("hubby")
//console.log(loginUserMessage("hubby"))
//output--hubby just logged in
// console.log(loginUserMessage(""))
//output-- just logged in
 // console.log(loginUserMessage())
 //output-- undefined just logged in


//default values --sam
// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

//  console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) //Please enter a username when sam is not wriiteen
// console.log(loginUserMessage())//sam just logged in
//console.log(loginUserMessage("hitesh")) //override --hitesh just logged in



// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));