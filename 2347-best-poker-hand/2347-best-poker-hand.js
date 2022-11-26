/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {    
    if (suits[1] === suits[0] && suits[2] === suits[0] && suits[3] === suits[0] && suits[4] === suits[0] ){
        return 'Flush'
    }
    let currentBestHand = ''
    ranks = ranks.sort((a, b) => a - b)
    for (let i = 0; i < ranks.length; i++){
        let currentElement = ranks[i]
        if (currentElement === ranks[i + 1]){
            currentBestHand = 'Pair'
            if( currentElement === ranks[i + 1] && currentElement === ranks[i + 2]){
                console.log(currentElement)
                currentBestHand = 'Three of a Kind'
                return currentBestHand
            }
        }
    }
    if (currentBestHand === ''){
        return 'High Card'
    }else {
        return currentBestHand
    }
};