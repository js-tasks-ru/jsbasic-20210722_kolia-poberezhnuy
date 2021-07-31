function camelize(str) {
  let splitArr = str.split('-');

  let camelSrt = splitArr.map((element, index) => {
    if (index == 0) {
      return element;
    }
    return element[0].toUpperCase() + element.slice(1);
  });
  
  return camelSrt.join('');
}
