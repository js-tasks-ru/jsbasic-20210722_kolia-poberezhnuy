function factorial(n) {
  let result = n;
  
  if ( result === 0) {
    return 1;
  }

  for(let i = result - 1; i > 1; --i ){
    result *= i;
  } 
  return result;
}