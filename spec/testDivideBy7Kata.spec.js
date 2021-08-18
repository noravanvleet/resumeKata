const { seven } = require("../public/js/divideBy7Kata")

describe ("seven(m, stepCounter)", () => {
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
    it ("Should return the same number if it is two or less digits", () =>{
        let result = seven(7, 0)
        expect(result).toEqual(["7",0])
    })

})

