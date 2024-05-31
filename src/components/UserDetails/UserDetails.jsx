import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const { name, phone, website, username, email, company, address } = user;

  return (
    <div className="bg-purple-100 p-3 font-semibold text-center h-screen">
      <h2> Company: {company.name}</h2>
      <p>Address: {address.city}</p>
      <p>{address.street}</p>
      <p>{address.geo.lat}</p>
      <h2>{company.catchPhrase}</h2>
      <h2> Name: {name}</h2>

      <span> User name: {username}</span>
      <p>Email: {email}</p>
      <p>Web: {website}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default UserDetails;
