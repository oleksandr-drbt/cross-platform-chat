import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
import ChatFooter from './ChatFooter';
import './styles.scss';

function Chat() {
  return (
    <div className="chat-container">
      <div className="chat-app justify-content-between bg-white px-0">
        <ChatHeader />
        <ChatContent />
        <ChatFooter />
      </div>
    </div>
  );
}

export default Chat;
