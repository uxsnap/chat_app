import { useEffect } from 'react';

export default (
  socket = null,
  emitObj = {name : '', func, changeFlag: []},
  onObj = { name: '', func, changeFlag: []}
) => {
  useEffect(() => {
    socket.emit(emitObj.name, () => emitObj.func());
  }, emitObj.changeFlag);
  
  useEffect(() => {
    socket.on(onObj.name, (res) => onObj.func(res));
  }, onObj.changeFlag);
} 