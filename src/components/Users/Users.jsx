import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
  const users = useLoaderData();

  console.log(users);
  return (
    <div className="bg-blue-50 p-2 m-2">
      <h1 className=" text-2xl font-bold text-center">
        Our users{users.length}
      </h1>
      <div className="md:grid grid-cols-3 gap-3">
        {users.map(user => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
