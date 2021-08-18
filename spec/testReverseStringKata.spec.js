const { reverse } = require("../public/js/reverseStringKata")
// handle each possible

describe ("reverse()", () => {

   it("should keep the same number of spaces", () => {
       let result = reverse("leggo my eggo")
       let resultArray = result.split(" ")
      expect(resultArray.length).toEqual(3)
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
    it("should return the reverse of the word", () => {
        let result = reverse("popcorn")
        expect(result).toEqual("nrocpop")
    })

    it("should return an empty string if an empty string is passed in", () => {
        let result = reverse("")
        expect(result).toEqual("")
    })
        it("should pass these basic string tests", () => {
            expect(reverse("The quick brown fox jumps over the lazy dog."))
                .toEqual("ehT kciuq nworb xof spmuj revo eht yzal .god")
            expect(reverse("apple"))
                .toEqual("elppa")
            expect(reverse("a b c d"))
                .toEqual("a b c d")
            expect(reverse('double  spaced  words'))
                .toEqual("elbuod  decaps  sdrow")
        })
})

