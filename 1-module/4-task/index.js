function checkSpam(str) {
  let strToLowerCase = str.toLowerCase();
  let spam; 

  spam = strToLowerCase.includes('1xbet') || strToLowerCase.includes('xxx');

  return spam;
}
