// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//key wo value jo mujhe har baar check karni hai
//bht sara lock h aapke pass ek key jo lock khulega wo print ho jayega
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    //shift+alt+down arrow - duplicate line

    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
        //agar break nhi hota to niche wala bhi print ho jata
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}