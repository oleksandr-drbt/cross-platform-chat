import { Server, Socket } from "socket.io";
import { sendMessage, sendMessageTo } from "./handlers/sendMessage";
import { sendConnectedUsers } from "./handlers/sendConnectedUsers";
import socketEvents from "./constants/socketEvents";

const port = parseInt(process.env.PORT) || 5000;

const io = new Server({
  cors: {
    origin: "*",
  },
});

const connections = new Map();
let allMessagesCount = 0;

io.on('connection', (socket: Socket) => {
  const clientId = socket.id;

  connections.set(clientId, { socket });
  console.log(`client ${clientId} connected`);
  sendConnectedUsers(connections, io);

  // todo
  socket.emit(socketEvents.MESSAGE_COUNT, allMessagesCount);
  console.log(`all messages count: ${allMessagesCount}`);

  socket.on(socketEvents.MESSAGE_SEND, (messageData) => {
    connections.set(clientId, { socket, userName: messageData.userName });
    sendConnectedUsers(connections, io);

    // todo
    sendMessage(messageData, io);
    io.emit(socketEvents.MESSAGE_COUNT, ++allMessagesCount);
  });

  socket.on(socketEvents.MESSAGE_SEND_TO, (messageData) => {
    connections.set(clientId, { socket, userName: messageData.userName });
    sendConnectedUsers(connections, io);

    // todo
    sendMessageTo(messageData, connections);
    io.emit(socketEvents.MESSAGE_COUNT, ++allMessagesCount);
  });

  socket.on(socketEvents.DISCONNECT, () => {
    connections.delete(clientId);
    console.log(`client ${clientId} disconnected`);
    sendConnectedUsers(connections, io);
  });
});

io.listen(port);
