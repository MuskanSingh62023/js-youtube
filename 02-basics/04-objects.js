//Object declaration using constructor
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);
 //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

 //Nestedobjects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//Accessing
// console.log(regularUser.fullname);//{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname);//{ firstname: 'hitesh', lastname: 'choudhary' }
// console.log(regularUser.fullname.userfullname.firstname);//hitesh

//Merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3)
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//Using assign function
//empty arraymto treat as target and others as source
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//Using Spread function
// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b'}

//When we get values from databse-Array ofobjects
// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

//gives output as array 
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//Kya aapke pass ye value h
// // console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

//Extracting Values from objects
//  course.courseInstructor
// const {courseInstructor} = course
// console.log(courseInstructor); //hitesh

//destructure karke uska naam instructor rakh diya
// const {courseInstructor: instructor} = course
// console.log(instructor);//hitesh

//APIs-pehle aati this xml structure me but ab json me
//json-ye object nhi h jisme keys and values dono string ki tarah likhna h
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//We get apis in array format which contain several objects
// [
//     {},
//     {},
//     {}
// ]