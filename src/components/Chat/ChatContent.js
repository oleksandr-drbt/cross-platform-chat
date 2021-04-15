import { useContext } from 'react';
import Message from './Message';
import { ChatContext } from '../../App';

function ChatContent() {
  const { messages } = useContext(ChatContext);

  return (
    <div className="chat-content h-100 px-5 py-5">
      {messages.map((message) => <Message {...message} key={message.id} />)}
    </div>
  );
}

export default ChatContent;
