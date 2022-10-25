/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
// Lopp through word one and loop through word2 and check every element to see if word2 includes it
// if all elements pass true return true
// else return false
var arrayStringsAreEqual = function(word1, word2) {
    let wordOneConcat = ''
    let wordTwoConcat = ''
    word1.forEach((element) => {
        wordOneConcat += element
    })
     word2.forEach((element) => {
        wordTwoConcat += element
    })
    if (wordOneConcat === wordTwoConcat){
        return true
    } else {
        console.log(wordOneConcat,wordTwoConcat)
        return false
    }
};