const { watermelonDivider } = require("../public/js/watermelonKata")

describe ("watermelonDivider(number)", () => {
    it("should return a boolean value", () => {
        expect(watermelonDivider(56)).toEqual(true || false)
    })
    it("should return false if the number is odd", () => {
        expect(watermelonDivider(55)).toEqual(false)
    })
    it("should return true if the number is even and is not 2", () => {
        expect(watermelonDivider(92)).toEqual(true)
    })
    it("should return true if the number is 2", () => {
        expect(watermelonDivider(2)).toEqual(false)
    })

    it ("should pass these basic tests from code wars", () =>{
        expect(watermelonDivider(4)).toEqual(true)
        expect(watermelonDivider(5)).toEqual(false)
        expect(watermelonDivider(88)).toEqual(true)
        expect(watermelonDivider(100)).toEqual(true)
        expect(watermelonDivider(67)).toEqual(false)
        expect(watermelonDivider(90)).toEqual(true)
        expect(watermelonDivider(10)).toEqual(true)
        expect(watermelonDivider(99)).toEqual(false)
        expect(watermelonDivider(32)).toEqual(true)
    })
})

