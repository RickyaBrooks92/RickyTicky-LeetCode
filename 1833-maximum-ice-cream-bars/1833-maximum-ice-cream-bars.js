/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
   costs.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
    });
    let count = 0
    for (let i = 0; i < costs.length; i++){
        let currentItem = costs[i]
        
         coins = coins - currentItem
        
        if (coins < 0){
           
            break;
        } else {
            count++
        }
    }
    return count 
};