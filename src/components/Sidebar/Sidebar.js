import NameForm from './NameForm';
import UsersSelect from './UsersSelect';
import './styles.scss';

function Sidebar() {
  return (
    <div className="chat-sidebar px-3">
      <NameForm />
      <div className="mt-3">
        <UsersSelect />
      </div>
    </div>
  );
}

export default Sidebar;
