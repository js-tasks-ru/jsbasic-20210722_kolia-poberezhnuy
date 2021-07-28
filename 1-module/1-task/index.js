function factorial(n) {

  let result = n;

  for(let i = result - 1; i > 1; --i ){
    result *= i;
    } if ( result === 0) {
      return 1;
    }
      return result;
}