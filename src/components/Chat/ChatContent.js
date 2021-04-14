import { useEffect, useState } from 'react';
import moment from 'moment';
import Message from './Message';

function ChatContent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        id: "1",
        author: "Aleksandr Drobot",
        content: "Yeah, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents.",
        isMyOwn: true,
        sentAt: moment(),
      },
      {
        id: "2",
        author: "Bohdan Onishenko",
        content: "Yeah, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents.",
        isMyOwn: false,
        sentAt: moment(),
      }
    ]);
  }, []);

  return (
    <div className="chat-content h-100 d-flex flex-column justify-content-end px-5 py-5">
      {messages.map((message) => <Message {...message} key={message.id} />)}
    </div>
  );
}

export default ChatContent;
