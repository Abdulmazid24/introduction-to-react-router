import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  console.log(postId);
  const postDetails = useLoaderData();
  const navigate = useNavigate();
  const { title, body, id } = postDetails;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="font-medium">{body}</p>
      <p className="font-bold">ID: {id}</p>
      <button
        onClick={handleGoBack}
        className=" font-medium px-2 py-[1px] m-2 bg-purple-200 rounded-md"
      >
        Go back
      </button>
    </div>
  );
};

export default PostDetail;
