 export default (e, callBack) => {
  return function() {
    if (prev === 'Control' && e.key === 'Enter') {
      callBack();
    } 
    prev = e.key;
    setTimeout(() => prev = null, 100);
  }
}