
// function uniqueArray(el) {
//     const uniqueNumber = []

//     el.forEach((ele) => {
//         if (!uniqueNumber.includes(ele)) {
//             uniqueNumber.push(ele)
//         }
//     })
//     return uniqueNumber
// }


// console.log("-->", uniqueArray(arr))
const arr = [1, 2, 3, 4, 4, 4, 4, 4, 5, 6]

function check() {
    return [...new Set(arr)]
}

console.log("--->", check(arr))