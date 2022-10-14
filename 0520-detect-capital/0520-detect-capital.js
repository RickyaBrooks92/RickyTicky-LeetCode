/**
 * @param {string} word
 * @return {boolean}
 */


var detectCapitalUse = function(word) {
const combinedLowerCapsReg = /^[a-z]*$|^[A-Z]*$|^[A-Z][a-z]*$/gm

    if(combinedLowerCapsReg.test(word)){
        return true
    } 
    return false
};