import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router";
import toast from "react-hot-toast";

const ForgetPassword = () => {

  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 Get email from Login page
  const emailFromLogin = location.state?.email || "";
  const [email, setEmail] = useState(emailFromLogin);

      useEffect(() => {
          document.title = "Reset-Password | ToyLand";
      }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Redirecting to Gmail...");
      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br mt-16 from-blue-100 to-pink-100 flex justify-center pt-20 ">

      <div className="w-full  h-100 max-w-md bg-gray-100 shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Forget Password
        </h2>

        <form onSubmit={handleResetPassword} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Enter your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00c1a6] text-white hover:bg-[#00a88f] font-semibold py-2 px-4 rounded-lg transition-all"
          >
            Reset Password
          </button>
        </form>
        

        <p className="text-center text-sm text-gray-600 mt-5">
          We’ll send you a password reset link. Check your Gmail inbox.
        </p>
        <Link
            to="/login"
            className="mt-15 btn btn-sm bg-[#00c1a6] text-white hover:bg-[#00a88f] border-0 rounded-lg "
          >
            Back to Login
          </Link>
      </div>
      
    </div>
  );
};

export default ForgetPassword;
