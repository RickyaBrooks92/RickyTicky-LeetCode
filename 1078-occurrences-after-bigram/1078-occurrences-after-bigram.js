/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const words = text.split(" ");
    const bigram = []
    for (let i = 0; i < words.length; i++){
        let currentElement = words[i]
        if (currentElement === first){
            if (words[i + 1] === second){
                if (words[i + 2] != undefined){
                    bigram.push(words[i + 2])
                }
            }
        }
    }
    return bigram
};

// const words = text.split(" ");
    // let count = 0
    // const bigram = []
    // console.log(words)
    // console.log(second)
    // for (let i = 0; i < words.length; i++){
    //     let currentElement = words[i]
    //     if (count === 2 && currentElement != first && currentElement != second){
    //         bigram.push(currentElement)
    //         count = 0
    //     }
    //     if (currentElement === first && count === 0){
    //         count = 1
    //         continue;
    //     }
    //     if (currentElement === second && count === 1){
    //         count = 2
    //         continue;
    //     } else if (count === 1 || count === 2){
    //         count = 0
    //     }
    // }
    // return bigram
