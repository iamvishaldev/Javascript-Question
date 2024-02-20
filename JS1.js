var str = "vishal yadav"

let arr = [1, 2, 3, 4, 5, 6]

// console.log("--s--", str.split(" ").forEach((words) => console.log("word", words)))

function getWords(words) {
    let result = words.split(' ').map(word => console.log("word--", word))

}
getWords(str)