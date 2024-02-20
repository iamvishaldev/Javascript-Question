// Rest Operator
function addNumber(a, b, c, ...other) {
    console.log(other)
    return a + b + c
}

const result = addNumber(2, 5, 6, 7, 8, 9)
// console.log("result", result)

// Spread Operator

// const arr = ["abc","abcc","lljd","ksjlsjl"]

// function getArray(name1,name2,name3){
//     console.log("-->",name1,name2,name3);
// }

// const output = getArray(arr)

// Array destructing
// extracting data from array and object 
const num = [10, 20, 30];
const [num1, num2, num3] = num;

console.log(num1);
console.log(num2);
console.log(num3);
