let score ="33abc"
//console.log(typeof score);
//console.log(typeof(score));

//coversion string to number
let valueInNumber = Number(score)
//console.log(typeof valueInNumber) //number
//console.log(valueInNumber)         //NaN

//score value 
//33 -> 33
//"33abc" -> NaN
//null->0
//undefined-> NaN
//true/false -> 0/1
//'anshu'-> NaN

let IsLoggedIn=1
let booleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(booleanIsLoggedIn)

//1->true
//""-> false
//anshu->true

//###############Operations##############
let value=3
let negValue= -value
// console.log(negValue)

//operations on numbers
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2='baby'
let str3=(str1+str2)
// console.log(str3) //hellobaby

//  console.log('1'+2) //12
//  console.log(1+"2") //12
//  console.log('1'+"2")//12
 
//  console.log('1'+2+2) //122
//  console.log(1+2+'2') //32

// console.log(true) //true
// console.log(+true) //1
// console.log(+"") //0


//prefix and postfix increment
let gameCounter=100
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)
 