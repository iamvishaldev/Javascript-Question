const arr = [1,[2],[[3]],[4],5,[[6]]]

let tempData = []

function check(arr){
    arr.forEach(element => {
        if(Array.isArray(element)){
            check(element)
        }else{
            tempData.push(element)
        }
        return tempData
    });
}
check(arr)
let count = {}

for(let i =0;i<tempData.length;i++){
    count[tempData[i]]=(count[tempData[i]] || 0 ) + 1
}


console.log("result",tempData)

console.log("count",count)