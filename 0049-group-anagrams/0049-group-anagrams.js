/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// loop through all the 
var groupAnagrams = function(strs) {
  const anagrams = {};
  strs.forEach((str) => {
    const sortedStr = str.split('').sort().join('');
    if (anagrams[sortedStr]) {
      anagrams[sortedStr].push(str);
    } else {
      anagrams[sortedStr] = [str];
    }
  });
  return Object.values(anagrams);
}