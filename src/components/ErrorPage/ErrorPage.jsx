import { Link, useParams, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Oops!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h2> Sorry !! page not found </h2>
          <p>Go back where you from</p>
          <div className="text-center">
            <Link to="/">
              <button className="px-2 py-[1px] font-bold bg-gray-300 rounded-md m-3 text-center">
                Go back
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
