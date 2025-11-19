import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 


const Login = () => {
  const { signIn, singInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    document.title = "Login | ToyLand";
  }, []);

  console.log("Location state:", location.state);
  

   const from = location.state?.from?.pathname || "/";
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(email, password);
      toast.success("Login successful! 🎉");
      // navigate("/");
       navigate(from, { replace: true });

    } catch (error) {
      toast.error(error.message);

    } finally {
      setLoading(false);
    }
  };


  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await singInWithGoogle();
      toast.success("Logged in with Google! ✅");
      // navigate("/");
      // navigate(`${location.state ? location.state : "/"}`);
       navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-blue-100 to-pink-100">
      <div className="bg-white shadow-lg p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#00c1a6] text-center mb-6 ">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          {/* Password with Eye Toggle */}
          <div className="relative">
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>


          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="mb-3 w-full bg-[#00c1a6] text-white hover:bg-[#00a88f] py-2 rounded-lg font-semibold  transition-all duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>


        {/* Forget Password Link with email state */}
        <div className="text-center mt-2">
          <Link
            to="/forgetpassword"
            state={{ email }} // 👈 sending email to Forget Password page
            className="text-sm text-[#00c1a6] hover:underline"
          >
            Forget Password?
          </Link>
        </div>


        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="grow h-px bg-gray-300"></div>
          <p className="px-3 text-gray-500 text-sm">or</p>
          <div className="grow h-px bg-gray-300"></div>
        </div>


        {/* Google Login */}
        <div className="mt-6 flex flex-col gap-3 items-center">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full border py-2 rounded-lg hover:bg-gray-50 transition-all"
          >
            <FcGoogle className="text-xl" /> Login with Google
          </button>


          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#00c1a6] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
