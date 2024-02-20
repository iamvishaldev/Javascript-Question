const reverseString = (words) => {
    let splitResult = words.split(' ')
    console.log('splitResult', splitResult);
    const reverseWords = splitResult.map((word) => {
        return word.split('').reverse().join('')
    })
    const revString = reverseWords.join('')
    return revString
}

const result = reverseString("Vishal")

console.log("result", result)