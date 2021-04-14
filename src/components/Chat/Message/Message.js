import PropTypes from 'prop-types';
import moment from 'moment';
import './styles.scss';

const propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isMyOwn: PropTypes.bool,
  sentAt: PropTypes.string.isRequired,
};

const defaultProps = {
  isMyOwn: false,
};

function Message(props) {
  const {
    author,
    content,
    isMyOwn,
    sentAt,
  } = props;

  return (
    <div className={`message ${isMyOwn ? 'message-right' : ''}`}>
      <div className="message-body d-flex align-items-center">
        <div className="message-content p-3">
          <h6 className="message-author mb-2">
            {author}
          </h6>
          <div className="mb-1">
            {content}
          </div>
          <small className="fw-light">
            {moment(sentAt).fromNow()}
          </small>
        </div>
      </div>
    </div>
  );
}

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
