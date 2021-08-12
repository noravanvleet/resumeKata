function handleSevenKata(){
    let input = document.getElementById("numberField").value
    makeRequest("divideBySeven", input, "outputForSeven")
}

/*function handleCountCars(){
    event.preventDefault();
    let input = document.getElementById("numberField").value
    makeRequest("divideBySeven", input, "outputForSeven")
}*/

function makeRequest(path, input, elementId) {
    const options = {
        method: 'GET',
        url: `http://localhost:4000/${path}`,
        params: {input: input},
        headers: {'Content-Type': 'application/json'},
    };

    axios.request(options).then(function (response) {
        document.getElementById(elementId).innerHTML = `<br>Result: [${response.data.result}] 
        <br>Number Of Passes Through Function: ${response.data.result[1]}
        <br>Number Remaining: ${response.data.result[0]}
        <br>It is common knowledge whether of not the remaining number is divisible by seven.`
    }).catch(function (error) {
        console.error(error);
    });
}

