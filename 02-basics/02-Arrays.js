const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//  marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//Output
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//flash


// Another method to join arrays usng concat
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//Third method -- Spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]
// // console.log(all_new_heros);
//output:
////[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//Nested arrays
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//flat function returns a new array with all sub array elements to a certain depth
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/


//Data Scrapping
// console.log(Array.isArray("Hitesh")) //Asking ki ye given input array hai ya nhi so false
//Method 1 to convert to array using Array.from() operator
// console.log(Array.from("Hitesh")) // jaise ki wo string tha it will be converted to array using from function
//[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // interesting kyuki isko bolna hoga ki arrays kiska bnau iske keys ka ya value ka toh ye empty array dega(key:value)
//[]

//Method 2 of multiple values can converting into array by using Array.of() operator
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//[ 100, 200, 300 ]