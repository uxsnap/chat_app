import clientSocket from 'socket.io-client';

// User socket
export default (url = '') => clientSocket(process.env.SOCKET_SERVER + url);
