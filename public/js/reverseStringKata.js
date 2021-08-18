
// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

const axios = require("axios")

function reverse(stringToReverse) {
    let reversedWord = ""
    let returnString = ""
    let returnArray = stringToReverse.split(" ")
    for(let i = 0; i < returnArray.length; i++){
        reversedWord = reverseWord(returnArray[i])
        if(i == 0){
            returnString = reversedWord
        } else{
            returnString = `${returnString} ${reversedWord}`
        }
    }
    return returnString
}

function reverseWord(word) {
    let returnStr = ""
    let tailIndex = word.length -1
    for(let i = tailIndex; i > -1; i--){
        returnStr = returnStr.concat(word[i])
    }
    return returnStr
}

const reverseString = (e) => {
    let kataField = e.target.data
    const options = {
        method: 'GET',
        url: 'https://resumekatas.herokuapp.com/reverseString',
    };

    axios.request(options).then(function (response) {
    }).catch(function (error) {
        console.error(error);
    });

}
module.exports = {
    reverse: reverse,
    reverseWord: reverseWord

}