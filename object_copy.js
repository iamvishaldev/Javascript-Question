// object copy are two type by value and by reference

// 1.Jab hum varaible ko copy karte hai tho ushke value copy hote hai
// 2.Jab hum object ko copy karte hai tho ushle refrence/memeroy location copy hote hai

// ---Example 1---

// let obj={
//     name:"peter"
// }
// let user = Object.assign({},obj)
// user.name="singh"
// console.log("obj",obj);

// ---Example 2---

// let x ="sumit"
// let y = x
// y = "bhai"
// console.log("result",x)

// Shallow copy

// let obj ={
//     name:"vishal"
// }

// let user = Object.assign({},obj)

// user.name = "yadav"

// console.log("result",obj)

// Deep Copy

let obj={
    name:"vishal",
    address:{
        city:"Mumbai",
        state:"Maharashtra"
    }
}

let user = JSON.parse(JSON.stringify(obj))

user.address.city="Noida"

console.log("result",obj)



