function filterRange(arr, a, b) {
  const filtered = arr.filter(filtArr => {
    if (filtArr >= a && filtArr <= b) {
      return filtArr;
    }
  });
  return filtered;
}
