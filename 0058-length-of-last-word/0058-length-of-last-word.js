/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
//   s = s.trim();
//   s = s.split(" ");
//   return s[s.length - 1].length;

  let stringLength = s.length;
  let lastwordLength = 0;
  for(let i = stringLength-1;i>=0;i--){
    if(lastwordLength > 0 && s[i] == ' ') break; 
    if(s[i] != ' '){
        lastwordLength++;
    }
  }

  return lastwordLength;
};