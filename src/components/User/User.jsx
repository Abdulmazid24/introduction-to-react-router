import PropTypes from 'prop-types';
const User = ({ user }) => {
  const { id, name, email, phone, website, company } = user;
  const { catchPhrase, bs } = company;
  return (
    <div className="bg-purple-100 p-4 m-2 shadow-2xl border-black border-2 rounded-lg">
      <h2 className=" font-bold">
        {name}
        <span>{id}</span>
      </h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <ul>
        <li>{company.name}</li>
        <li>{catchPhrase}</li>
        <li>{bs}</li>
      </ul>
    </div>
  );
};

export default User;
User.propTypes = {
  user: PropTypes.obj,
};
