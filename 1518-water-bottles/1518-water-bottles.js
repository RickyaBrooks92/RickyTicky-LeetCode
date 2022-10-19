/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

//First drink all the filled water bottles 
// Exchange all the empty bottles 3 for 1 into filled bottle
// Drink all filled bottles
// Exchange againe till we can't exchange
//return number drank
var numWaterBottles = function(numBottles, numExchange) {
    let drank = 0
    let emptyBottle = 0
    drank += numBottles
    emptyBottle = numBottles
    
    while (emptyBottle >= numExchange){
        emptyBottle = emptyBottle - numExchange
         drank++
        emptyBottle++
    }
    
    return drank
};