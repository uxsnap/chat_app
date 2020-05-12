import addZeros from './addZeros';

export default (date) => {
  if (!date) return '';
  const dated = new Date(date);
  const [year, month, day, h, m, s] = [
    dated.getFullYear(),
    dated.getMonth(),
    dated.getDate(),
    dated.getHours(),
    dated.getMinutes(),
    dated.getSeconds()
  ].map(d => addZeros(d));
  return `${h}:${m}:${s}, ${day}-${month}-${year}`;
}
