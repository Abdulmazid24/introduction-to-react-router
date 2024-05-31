import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
  const postDetails = useLoaderData();
  const { title, body, id } = postDetails;
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="font-medium">{body}</p>
      <p className="font-bold">ID: {id}</p>
    </div>
  );
};

export default PostDetail;
