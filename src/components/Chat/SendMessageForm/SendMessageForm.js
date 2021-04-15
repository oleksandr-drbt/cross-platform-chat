import { useContext, useState } from 'react';
import { ChatContext } from '../../../App';
import { ReactComponent as SendIcon } from '../../../assets/icons/send-icon.svg';
import './styles.scss';

function SendMessageForm() {
  const {
    userName,
    sendMessage,
  } = useContext(ChatContext);

  const [message, setMessage] = useState("");

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <form id="send-message-form" onSubmit={handleSendMessage}>
      <div className="d-flex align-items-center">
        <div className="col">
            <textarea className="message-input form-control border-0 px-0" rows="1" value={message}
                      placeholder="Type your message..." onInput={handleInputMessage} />
        </div>
        <div className="col-auto">
          <button className="send-message-btn btn btn-ico btn-primary rounded-circle" type="submit" disabled={!message || !userName}>
            <SendIcon />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SendMessageForm;
