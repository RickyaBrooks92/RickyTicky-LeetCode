/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let longestDur = 0
    let keyPressed = []
    for (let i = 0; i < keysPressed.length; i++){
        let currentKey = keysPressed[i]
        if (longestDur === 0){
            longestDur = releaseTimes[i]
            keyPressed.push(currentKey)
        }
        console.log(releaseTimes[i] - releaseTimes[i-1], longestDur)
        if (releaseTimes[i] - releaseTimes[i - 1] >= longestDur){
            if(releaseTimes[i] - releaseTimes[i-1] === longestDur){
                keyPressed.push(currentKey)
                continue
            }
           
            longestDur = releaseTimes[i] - releaseTimes[i-1]
            keyPressed = []
            keyPressed.push(currentKey)
        }
    }
    let sortedKeyPressed = keyPressed.sort()
    console.log(keyPressed.sort())
    return sortedKeyPressed[sortedKeyPressed.length - 1]
};