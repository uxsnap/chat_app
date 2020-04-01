import clientSocket from 'socket.io-client';

console.log(process.env.SOCKET_SERVER);
// User socket
export default clientSocket(process.env.SOCKET_SERVER);
