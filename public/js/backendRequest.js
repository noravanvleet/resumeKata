function handleSevenKata(){
    let input = document.getElementById("numberField").value
    makeRequest("divideBySeven", input, "outputForSeven", "seven")
}

function handleReverseKata(){
    let input = document.getElementById("stringInput").value
    makeRequest("reverseString", input, "outputForReverse", "reverse")
}

function handleWatermelonKata(){
    let input = document.getElementById("watermelonInput").value
    makeRequest("watermelon", input, "outputForWatermelon", "watermelon")
}

function makeRequest(path, input, elementId, kata) {
    let strDescription = ""
    const options = {
        method: 'GET',
        url: `http://localhost:4000/${path}`,
        params: {input: input},
        headers: {'Content-Type': 'application/json'},
    };

    axios.request(options).then(function (response) {
        if(kata == "seven"){
            strDescription = `The function completed ${response.data.result[1]} pass(es) and resulted in the number ${response.data.result[0]}.<br>${input} is divisible by 7 if and only if ${response.data.result[0]} is divisible by seven.`
            document.getElementById(elementId).innerHTML = `<br>${strDescription}<br>Result: [${response.data.result}]`
        } else {
            document.getElementById(elementId).innerHTML = `<br>${strDescription}<br>Result: "${response.data.result}"`
        }

    }).catch(function (error) {
        console.error(error);
    });
}

