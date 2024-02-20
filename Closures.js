var sum=function(a){
    console.log("a",a)
    return function(){
        return a+b
    }
}

var store = sum(2)