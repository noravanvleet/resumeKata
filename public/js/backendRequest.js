function handleSevenKata(){
    event.preventDefault();
    console.log("reached")
 let input = document.getElementById("numberField").value
    let request = { input: input }
    axios.post('https://resumekatas.herokuapp.com/divideBySeven', request)
        .then(function (response) {
            let output = document.getElementById('outputForSeven')
            output.innerHTML = response.data.result
        })
        .catch(function (error) {
            console.log(error)
        });
}

