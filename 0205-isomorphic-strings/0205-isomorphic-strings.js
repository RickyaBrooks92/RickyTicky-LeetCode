/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length){
        return false
    }
    let sMap = {}
    let tMap = {}
    
    for(let i = 0; i < s.length; i++){
        let sLetterMap = s[i];
        let tLetterMap = t[i]
        if (sMap[sLetterMap] == undefined){
            sMap[sLetterMap] = tLetterMap 
        }
        if (tMap[tLetterMap] == undefined){
            tMap[tLetterMap] = sLetterMap
        }
        if (sMap[sLetterMap] != tLetterMap || tMap[tLetterMap] != sLetterMap){
            return false;
        }
    }
    return true
};