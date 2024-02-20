let arr = [1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7]

// let newUniqueArr = [...new Set(arr)]

const uniqueElements = (arr) => {
    const unique = []
    arr.forEach((el) => {
        if (!unique.includes(el)) {
            unique.push(el)
        }
    })
    return unique
}

let result = uniqueElements([1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7])

// reduce method

const getUniqueElements = (arr) => {
    console.log("arr", arr)
}

const output = getUniqueElements(arr)

console.log("output", output)
