import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  users: PropTypes.instanceOf(Array),
};

const defaultProps = {
  users: [
    {
      id: "1",
      name: "Aleksandr Drobot"
    },
    {
      id: "2",
      name: "Bohdan Onishenko"
    },
  ],
};

function UsersSelect(props) {
  const {
    users,
  } = props;

  const [isSendToAll, setIsSendToAll] = useState(true);

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
        <select className="form-select py-3" size={users.length} multiple>
          {users && users.map(({ id, name }) => (
            <option value={id} className="p-2" key={id}>
              {name}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}

UsersSelect.propTypes = propTypes;
UsersSelect.defaultProps = defaultProps;

export default UsersSelect;
