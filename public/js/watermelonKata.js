const axios = require("axios")

function watermelonDivider (number){
    if(number%2 == 1){
        return false
    } else if (number%2 == 0 && number != 2){
        return true
    } else {
        return false
    }
}

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