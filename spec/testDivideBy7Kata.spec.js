const { seven } = require("../public/js/divideBy7Kata")
//const jest = require("jest")
const fs = require('fs')
let path = require('path')
const testDataFile = path.resolve(__dirname, './data/testData.json')
let testData = fs.readFileSync(testDataFile)
let projectObject = JSON.parse(testData)

describe ("division by 7", () => {
    it ("should return an array with the number left after passes and the number of passes", () =>{
        let result = seven(378)
        expect(result[0]).toEqual(21)
        expect(result[1]).toEqual(1)
    })
    it ("should return an array", () =>{
        let result = seven(371)
        expect(result).toEqual([35,1])
    })
})

