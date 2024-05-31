import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { title, id } = post;
  return (
    <div className="bg-gray-800 text-white p-3 m-2 rounded-lg border-2 border-white space-y-2">
      <h2 className="text-xl font-bold mb-3">{title}.</h2>
      {/* <p className=" font-medium">{body}.</p> */}
      <small className=" font-extrabold ">Post of Id: {id} </small>
      <Link
        className="bg-green-300 text-black px-2 font-bold ml-2 mt-2 rounded-lg"
        to={`/post/${id}`}
      >
        Post Details
      </Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
