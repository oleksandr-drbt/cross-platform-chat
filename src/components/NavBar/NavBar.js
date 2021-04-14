import { ReactComponent as ChatIcon } from '../../assets/icons/chat-icon.svg';
import './styles.scss';

function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <ChatIcon className="chat-navbar-icon mx-2" />
          Chat
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
