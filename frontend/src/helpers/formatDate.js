export default (date) => {
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ]
  return `${year}-${month}-${day}`;
}