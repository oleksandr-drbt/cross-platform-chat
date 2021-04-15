import { v4 } from "uuid";
import socketEvents from "../constants/socketEvents";

const generateMessage = (messageData) => {
  const { clientId, userName, content } = messageData;

  return {
    id: v4(),
    author: userName,
    content: content,
    clientId: clientId,
    sentAt: new Date(),
  };
};

export const sendMessage = (messageData, io) => {
  console.log('new message received', messageData);

  const message = generateMessage(messageData);
  console.log('sending formatted message', message);

  io.emit(socketEvents.MESSAGE, message);
};

export const sendMessageTo = (messageData, connections) => {
  console.log('new message received', messageData);

  const message = generateMessage(messageData);
  console.log('sending formatted message', message);

  connections.get(messageData.clientId).socket.emit(socketEvents.MESSAGE, message);

  const { recipients } = messageData;
  recipients.forEach((recipientId) => {
    connections.get(recipientId).socket.emit(socketEvents.MESSAGE, message);
  })
};
