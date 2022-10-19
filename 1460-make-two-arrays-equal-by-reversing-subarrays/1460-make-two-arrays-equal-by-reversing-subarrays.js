/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if (target.length !== arr.length){
        return false;
    }
    target.sort()
    arr.sort()
    console.log(target,arr)
    for (let i = 0; i < target.length; i++){
        let targetElement = target[i]
        let arrElement = arr[i]
        if (arrElement === targetElement){
            continue;
        } else {
            return false
        }
        }
    
    return true
};