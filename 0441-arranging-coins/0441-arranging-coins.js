/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sCount = 0
    let stairs = 1
    while (n >= 0){
         n = n - stairs;
        if ( n >= 0){
          
            stairs++
            sCount++
        }
    }
    return sCount
};