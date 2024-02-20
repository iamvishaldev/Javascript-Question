const arr =[5,1,3,2,6]

// sum  of max

function findSum(arr){
    let sum = 0
    for(let i =0;i<arr.length;i++){
        debugger
        sum = sum + arr[i]
    }
    return sum
}

let result = findSum(arr)

console.log('====================================');
console.log("result",result);
console.log('====================================');