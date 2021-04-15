import { useContext } from 'react';
import { ChatContext } from '../../../App';
import './styles.scss';

function NameForm() {
  const {
    userName,
    setUserName,
  } = useContext(ChatContext);

  const handleInputName = (e) => {
    const name = e.target.value;
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  return (
    <form id="name-form">
      <input type="text" className="form-control" placeholder="Enter your name..."
             value={userName} onInput={handleInputName} />
    </form>
  );
}

export default NameForm;
