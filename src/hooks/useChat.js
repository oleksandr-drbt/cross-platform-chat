import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import socketEvents from '../constants/socketEvents';

const SOCKET_SERVER_URL = 'http://localhost:5000';

export const useChat = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || "");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [allMessagesCount, setAllMessagesCount] = useState(0);
  const [isSendToAll, setIsSendToAll] = useState(true);
  const [recipients, setRecipients] = useState([]);
  const socketConnectionRef = useRef(null);

  useEffect(() => {
    socketConnectionRef.current = io(SOCKET_SERVER_URL);

    socketConnectionRef.current.on(socketEvents.MESSAGE, (message) => {
      setMessages(prevMessages => [...prevMessages, {
        ...message,
        isMyOwn: message.clientId === socketConnectionRef.current.id,
      }]);
    });

    socketConnectionRef.current.on(socketEvents.USERS, (receivedUsers) => {
      setUsers(receivedUsers);
    });

    socketConnectionRef.current.on(socketEvents.MESSAGE_COUNT, (messagesCount) => {
      setAllMessagesCount(messagesCount);
    });

    return () => {
      socketConnectionRef.current.disconnect()
    }
  }, []);

  const sendMessage = (content) => {
    if (!isSendToAll) {
      socketConnectionRef.current.emit(socketEvents.MESSAGE_SEND_TO, {
        clientId: socketConnectionRef.current.id,
        userName,
        content,
        recipients,
      })
      return;
    }

    socketConnectionRef.current.emit(socketEvents.MESSAGE_SEND, {
      clientId: socketConnectionRef.current.id,
      userName,
      content,
    });
  };

  return { userName, users, messages, allMessagesCount, isSendToAll, setIsSendToAll, setRecipients, setUserName, sendMessage };
};
