
// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

const axios = require("axios")

function reverse(stringToReverse) {
    return stringToReverse.split(" ").map(el => {
        return el.split("").reverse().join("")
    }).join(" ")
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
    reverse: reverse

}