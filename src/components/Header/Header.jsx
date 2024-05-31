import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Header = () => {
  return (
    <>
      <div className="text-center  bg-black text-white px-16  py-3 text-xl font-extrabold ">
        <span className="">My Website</span>
      </div>
      <nav className=" bg-purple-400 shadow-xl border-b-2 border-black  flex justify-around p-4 text-white font-bold rounded-md">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/users">Our users</Link>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Header;
