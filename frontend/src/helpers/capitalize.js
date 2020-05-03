export default (str) =>
  !str || !str.length
    ? ''
    : str[0].toUpperCase() + str.slice(1,);  
