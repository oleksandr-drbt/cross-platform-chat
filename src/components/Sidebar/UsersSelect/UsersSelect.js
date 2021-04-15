import { useContext, useState } from 'react';
import { ChatContext } from "../../../App";
import './styles.scss';

function UsersSelect() {
  const { users } = useContext(ChatContext);

  const [isSendToAll, setIsSendToAll] = useState(true);

  const usersWithName = users.filter(({ userName }) => userName);

  const toggleSendToAll = (e) => {
    setIsSendToAll(prevState => !prevState);
  };

  return (
    <div className="users-select">
      <div className="form-check form-switch mb-3">
        <input className="form-check-input" type="checkbox" checked={isSendToAll} onChange={toggleSendToAll} />
        <label className="form-check-label d-block fw-bolder text-uppercase">send to all</label>
      </div>
      {!isSendToAll && (
        <select className="form-select py-3" size={usersWithName.length} multiple>
          {usersWithName && usersWithName.map(({ id, userName }) => (
            <option value={id} className="p-2" key={id}>
              {userName}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}

export default UsersSelect;
