/*
Your task is to return to the function seven(m) (m integer >= 0) an array
(or a pair, depending on the language) of numbers, the first being the last
number m with at most 2 digits obtained by your function
(this last m will be divisible or not by 7), the second one being
the number of steps to get the result.

Return on the stack number-of-steps, last-number-m-with-at-most-2-digits
*/

let stepCounter = 0;

function seven(m) {
    let subtractNumber = 0;
    m = m.toString()
    let numDigits = m.length
    if(numDigits > 2){
        subtractNumber = m[numDigits-1]
        m = m.slice(0, numDigits-1)
        m = m - 2*subtractNumber
        stepCounter++
        return [m, stepCounter];
    } else {
        return [m, stepCounter]
    }

}



let m = document.getElementById('numberField')
m.addEventListener("click", function(){ console.log(seven(m.value)) });
//console.log(m)
//console.log(seven(371))
//console.log(seven(m))