export default ({ name, date }) => {
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ]
  return `${name} ${year}-${month}-${day}`;
}