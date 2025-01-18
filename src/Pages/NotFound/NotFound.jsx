const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl font-semibold mt-4">Oops! Page not found.</p>
      <p className="text-gray-600 mt-2">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 text-white bg-[#a12326] rounded-lg hover:bg-[#871d1f]"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
