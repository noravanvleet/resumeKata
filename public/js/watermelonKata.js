const axios = require("axios")

function watermelonDivider (number){}

const divideWatermelons = (e) => {
    let kataField = e.target.data
    const options = {
        method: 'GET',
        url: 'https://resumekatas.herokuapp.com/watermelon',
    };

    axios.request(options).then(function (response) {
    }).catch(function (error) {
        console.error(error);
    });

}
module.exports = {
    watermelonDivider: watermelonDivider
}