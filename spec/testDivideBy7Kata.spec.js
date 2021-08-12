const { seven } = require("../public/js/divideBy7Kata")
const fs = require('fs')
let path = require('path')
const testDataFile = path.resolve(__dirname, './data/testData.json')
let testData = fs.readFileSync(testDataFile)
let projectObject = JSON.parse(testData)

describe ("division by 7 javascript", () => {
    it ("should return an array with the number left after passes and the number of passes", () =>{
        let result = seven(378, 0)
        expect(result[0]).toEqual("21")
        expect(result[1]).toEqual(1)
    })
    it ("should return an array", () =>{
        let result = seven(371, 0)
        expect(result).toEqual(["35",1])
    })
    it ("Should work for numbers more than three digits", () =>{
        let result = seven(7000, 0)
        expect(result).toEqual(["70",2])
    })
    it ("Should work for numbers less than three digits", () =>{
        let result = seven(18, 0)
        expect(result).toEqual(["18",0])
    })
})
describe ("html", () => {
    it ("should display a print out of the calculation", () =>{
  //  let result = document.getElementById()
    })
    it ("Should display an error if they dont input anything", () =>{

    })
    it ("Should display an error if they do not input a number", () =>{

    })
})

