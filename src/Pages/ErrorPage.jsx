import React, { useEffect } from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Error | ToyLand";
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 text-center px-6">
      <h1 className="text-[120px] font-extrabold text-pink-500 leading-none drop-shadow-md">
        404
      </h1>
      
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found 😢
      </h2>
      
      <p className="text-gray-600 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back to safety!
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-all duration-300"
      >

        <FaHome /> Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
