function sumSalary(salaries) {
  let sum = 0;

  for (let key of Object.values(salaries)) {
    if (key > 0 && key != Infinity) {
      sum += key;
    }
  }
  return sum;
}
