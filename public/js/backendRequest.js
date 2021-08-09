function handleSevenKata(){
    event.preventDefault();
    console.log("reached")
 let input = document.getElementById("numberField").value
    axios.get('https://resumekatas.herokuapp.com/divideBySeven', { params: { input: input } })
        .then(function (response) {
            let output = document.getElementById('outputForSeven')
            output.innerHTML = response.answer
        })
        .catch(function (error) {
            console.log(error)
        });
}



