function getMinMax(str) {
  let result = {
    min: null,
    max: null,
  };

  let splitStr = str.split(' ');
  let newArr = splitStr.map((arr) => parseFloat(arr));
  
  newArr.forEach((arr) => {
    if (arr < result.min) {
      result.min = arr;
    } else if (arr > result.max) {
      result.max = arr;
    }
  });

  return result;
}
