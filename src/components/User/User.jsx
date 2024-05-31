import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({ user }) => {
  const { id, name, email, phone, website, company } = user;
  const { catchPhrase, bs } = company;
  return (
    <div className="bg-purple-100 p-4 m-2 shadow-2xl border-black border-2 rounded-lg space-y-1">
      <h2 className=" font-bold">
        {name}
        <span>{id}</span>
      </h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <ul className="pb-2">
        <li>{company.name}</li>
        <li>{catchPhrase}</li>
        <li>{bs}</li>
      </ul>
      <Link
        className="font-bold bg-purple-300 p-2 my-2 rounded-lg"
        to={`/user/${id}`}
      >
        Show Details
      </Link>
      <Link
        className="font-bold bg-purple-300 p-2 my-2 rounded-lg ml-2"
        to={`/user/${id}`}
      >
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default User;
User.propTypes = {
  user: PropTypes.obj,
};
