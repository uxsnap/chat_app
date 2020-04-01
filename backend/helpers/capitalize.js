module.exports = function(str) {
  if (!str.length)
    return;
  return str[0].toUpperCase() + str.slice(1,);
}