/**
 * @param {number[]} nums
 * @return {number}
 */
// Sort the array
// find out if the current Element is even if its even enter a for loop to count how many other numbers are the same and make that the most frequent number
var mostFrequentEven = function(nums) {
     let map = {}, ele = null, freq = 0;
    
    for(let n of nums) {
        if(n % 2 === 0) {
            map[n] = map[n] + 1 || 1;
            if(map[n] > freq) {
                ele = n;
                freq = map[n];
            } else if(map[n] === freq) {
                ele = Math.min(ele, n);
            } else {
                // nothing;
            }
        }
    }
    
    return ele ?? -1;
};