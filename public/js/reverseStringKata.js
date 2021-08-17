const axios = require("axios")

function reverse() {

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