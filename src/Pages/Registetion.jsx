import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁️ icons for show/hide password

const Register = () => {
    const { createUser, updateUser, singInWithGoogle, setUser } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // 👁️ state toggle

    const navigate = useNavigate();
        useEffect(() => {
            document.title = "Register | ToyLand";
        }, []);

    // ✅ Password validation
    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return false;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return false;
        }
        return true;
    };

    // ✅ Handle Register
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validatePassword(password)) return;
        setLoading(true);

        try {
            const result = await createUser(email, password);
            await updateUser({
                displayName: name,
                photoURL: photoURL,
            });

            toast.success("Registration successful! 🎉");
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Handle Google Login
    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const data = await singInWithGoogle();
            toast.success("Logged in with Google! ✅");
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-blue-100 to-pink-100">

            <div className="bg-white shadow-lg p-10 rounded-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-[#00c1a6]">
                    Create an Account 
                </h2>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-600">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter photo URL"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                    </div>

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

                    {/* ✅ Password Field with Eye Toggle */}
                    <div className="relative">
                        <label className="block mb-1 text-sm font-semibold text-gray-600">
                            Password
                        </label>
                        <input

                            type={showPassword ? "text" : "password"} // toggle input type
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

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#00c1a6] text-white hover:bg-[#00a88f] py-2 rounded-lg font-semibold  transition-all duration-300"
                    >
                        {loading ? "Registering..." : "Register"}

                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="grow h-px bg-gray-300"></div>
                    <p className="px-3 text-gray-500 text-sm">or</p>
                    <div className="grow h-px bg-gray-300"></div>
                </div>

                <div className="mt-6 flex flex-col gap-3 items-center">
                    <button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="flex items-center justify-center gap-2 w-full border py-2 rounded-lg hover:bg-gray-50 transition-all"
                    >
                        <FcGoogle className="text-xl" /> Register with Google
                    </button>

                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#00c1a6] hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
