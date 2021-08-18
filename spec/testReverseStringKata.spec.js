const { reverse, reverseWord } = require("../public/js/reverseStringKata")


describe ("reverse()", () => {

   it("should keep the same number of spaces", () => {
       let result = reverse("ab cd")
       let resultArray = result.split(" ")
      expect(resultArray.length).toEqual(2)
   })

    it("should reverse each word individually", () => {
        let result = reverse("oggel ym ogge")
        expect(result).toEqual("leggo my eggo")
    })

    it("should retain the location of the spaces", () => {
        let result = reverse("oggel ym ogge")
        let resultArray = result.split(" ")
        expect(resultArray[0]).toEqual("leggo")
        expect(resultArray[1]).toEqual("my")
        expect(resultArray[2]).toEqual("eggo")
    })

})

describe ("reverseWord()", () => {

    it("should return the reverse of the word", () => {
        let result = reverseWord("popcorn")
        expect(result).toEqual("nrocpop")
    })

    it("should return an empty string if an empty string is passed in", () => {
        let result = reverseWord("")
        expect(result).toEqual("")
    })

})