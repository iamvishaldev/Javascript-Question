// var data = [1,5, [3],[[6]], [[[8]]]]
// var d1 = []

// function check (d2){
//  d2.forEach((item)=>{
//   console.log("item", item)
//   console.log("a", Array.isArray(item))
//   if(Array.isArray(item)){
//     check(item)
//   }else{
//     d1.push(item)
//   }
// })
//   return d1
// }


// console.log("d1", check(data))

// var data =  [1,5,[3],[[6]],[[[8]]]]

// let d1 = []

// function check(d2){
//     d2.forEach(element => {
//         if(Array.isArray(element)){
//             check(element)
//         }else{
//             d1.push(element)
//         }
//     });
//     return d1
// }

// check(data)

// console.log("d1",d1)

var data = [1, [2], 3, [[4]], 5, 6, [[[8]]], 9, [10]]


let d1 = []

function check(d2) {
    d2.forEach((element) => {
        if (Array.isArray(element)) {
            check(element)
        } else {
            d1.push(element)
        }
    })
    return d1
}

check(data)

console.log("d1", d1)