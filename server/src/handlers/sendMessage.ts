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
