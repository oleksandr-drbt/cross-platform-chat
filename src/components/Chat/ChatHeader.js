import { useContext } from 'react';
import { ChatContext } from '../../App';

function ChatHeader() {
  const { users, allMessagesCount } = useContext(ChatContext);

  return (
    <div className="chat-header d-flex justify-content-end border-bottom p-4">
      <small className="text-muted">{`${users.length || 0} members`}</small>
      <small className="text-muted mx-2"> • </small>
      <small className="text-muted">{`${allMessagesCount} messages`}</small>
    </div>
  );
}

export default ChatHeader;
