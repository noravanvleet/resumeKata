function handleSevenKata(){
    let input = document.getElementById("numberField").value
    makeRequest("divideBySeven", input, "outputForSeven")
}

function handleCountCars(){
    event.preventDefault();
    let input = document.getElementById("numberField").value
    makeRequest("divideBySeven", input, "outputForSeven")
}

function makeRequest(path, input, elementId) {
    const options = {
        method: 'GET',
        url: `http://localhost:4000/${path}`,
        params: {input: input},
        headers: {'Content-Type': 'application/json'},
    };

    axios.request(options).then(function (response) {
        document.getElementById(elementId).innerHTML = response.data.result
    }).catch(function (error) {
        console.error(error);
    });
}

