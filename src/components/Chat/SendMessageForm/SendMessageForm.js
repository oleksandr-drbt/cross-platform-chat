import { ReactComponent as SendIcon } from '../../../assets/icons/send-icon.svg';
import './styles.scss';

function SendMessageForm() {
  return (
    <form id="send-message-form">
      <div className="d-flex align-items-center">
        <div className="col">
            <textarea className="message-input form-control border-0 px-0" rows="1"
                      placeholder="Type your message..." />
        </div>
        <div className="col-auto">
          <button className="send-message-btn btn btn-ico btn-primary rounded-circle" type="submit">
            <SendIcon />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SendMessageForm;
