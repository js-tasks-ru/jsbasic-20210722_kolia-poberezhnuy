function filterRange(arr, a, b) {
  const filtered = arr.filter(filtArr => {
    this.a = a;
    this.b = b;

    if (filtArr >= this.a && filtArr <= this.b) {
      return filtArr;
    }

  });
  return filtered;
}
