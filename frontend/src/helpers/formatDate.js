export default (date) => {
  if (!date) return '';
  const dated = new Date(date);
  const [year, month, day] = [
    dated.getFullYear(),
    dated.getMonth(),
    dated.getDate()
  ]
  return `${day}-${month}-${month}`;
}
