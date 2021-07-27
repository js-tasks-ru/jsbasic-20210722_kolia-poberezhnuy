function truncate(str, maxlength) {
  let text = str; 
  let textLength = text.length;

  if ( textLength > maxlength) {
    return text.substring(0, maxlength - 1 ) + '…';
  } else {
      return text;
  }
}
