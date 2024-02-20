//Question 1 - which result first print in the console.log

// console.log(1)

// setTimeout(() => console.log(2), 1000)

// setTimeout(() => console.log(3), 200)

// console.log(4)

//Question 2 - what is the output  of this setTimeout function
let count = 0

function foo() {
    if (count == 0) {
        let count = 3
        console.log("1", count);
    }
    console.log("2", count);
}
foo()
