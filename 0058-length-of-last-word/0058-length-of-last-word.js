/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let sArray = [...s] 
   let count = 0
   console.log(sArray)
    sArray.reverse()
    for (let i = 0; i < sArray.length; i++){
        let currentElement = sArray[i]
        if(currentElement === ' ' && count !== 0){
            break;
        }else if (currentElement === ' '){
            continue;
        } else {
            count++
        }
    }
    return count
};