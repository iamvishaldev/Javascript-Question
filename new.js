// 1.write code to get array of name from given array of user 1

let user = [
    {
        id:0,
        name:"hii",
        isActive:true,
        age:18
    },
    {
        id:1,
        name:"hello",
        isActive:true,
        age:18
    },
    {
        id:2,
        name:"kkk",
        isActive:false,
        age:18
    },
    {
        id:3,
        name:"lll",
        isActive:false,
        age:18
    },
    {
        id:4,
        name:"llml",
        isActive:false,
        age:18
    },
]

let userArr =[]
// solution 1
// for(let i =0;i<user.length;i++){
//     if(user[i].isActive){
//    userArr.push(user[i].name)
//     }
// }
// solution 2
// user.forEach((element)=>{
//     if(element.isActive){
//     userArr.push(element.name)
//     }
// })
// // solution 3
// user.map((element) => {
//     if (element.isActive) {
//         console.log(element.name)
//     }
// })
// console.log("userArr",userArr)

let  result = user.filter((user)=>user.isActive).map((element)=>element.name)

console.log('====================================');
console.log("result",result);
console.log('====================================');
