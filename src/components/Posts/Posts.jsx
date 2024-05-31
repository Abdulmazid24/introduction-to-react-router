import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-950 text-white text-xl font-bold rounded-lg p-3 m-2 text-center">
        <h2>Our Posts: {posts.length}</h2>
      </div>
      <div className="md:grid grid-cols-4 gap-2">
        {posts.map(post => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
