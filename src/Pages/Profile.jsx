import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Profile | ToyLand";
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
      setBio(user.bio || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);

    try {
      await updateProfile(user, { displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL, bio });
      toast.success("Profile updated successfully! ✅");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logOut();
    toast.success("Logged out successfully!");
  };

  if (!user) {
    return <p className="text-center mt-10 ">Please login first.</p>;
  }

  return (
    <div className="  min-h-screen  flex flex-col items-center pt-12 p-6">
      {/* Main Container */}
      <div className="w-full max-w-5xl rounded-3xl  p-10 flex flex-col md:flex-row md:space-x-12">

        {/* Left Side - Profile Info */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4">
          <img
            src={user.photoURL || "/default-profile.png"}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-gray-200 shadow-md mb-2"
          />
          <h1 className="text-3xl font-bold mb-1">{user.displayName || "No Name"}</h1>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <p className="text-gray-500 mb-2">{bio || "No bio available."}</p>

          {/* Account Stats */}
          <div className="text-gray-500 text-sm space-y-1">
            <p>Account Created: <span className="font-semibold">{user.metadata?.creationTime || "N/A"}</span></p>
            <p>Last Sign-In: <span className="font-semibold">{user.metadata?.lastSignInTime || "N/A"}</span></p>
            <p>Email Verified: <span className="font-semibold">{user.emailVerified ? "Yes" : "No"}</span></p>
            <p>Total Logins: <span className="font-semibold">42</span></p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleLogout}
              className="bg-[#00c1a6] text-white hover:bg-[#00a88f]  py-2 px-4 rounded-lg transition-all"
            >
              Logout
            </button>
            <button
              onClick={() => toast("Password change not implemented")}
              className="bg-[#00c1a6] text-white hover:bg-[#00a88f] py-2 px-4 rounded-lg transition-all"
            >
              Change Password
            </button>
          </div>

          {/* Recent Activity */}
          <div className="mt-6 w-full">
            <h3 className="font-semibold text-gray-700 mb-2">Recent Activity</h3>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Logged in from new device</li>
              <li>Updated profile picture</li>
              <li>Changed display name</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Edit Form */}
        
        <form
          onSubmit={handleUpdate}
          className="flex-1 flex flex-col w-full max-w-md space-y-6 justify-start md:justify-center mt-6 md:mt-0"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center md:text-left">
            Edit Your Profile
          </h2>

          <div>
            <label className="block mb-1 font-medium text-gray-600">Name</label>
            <input
              type="text"
              // value={name}

              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a88f]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">Photo URL</label>
            <input
              type="text"
              // value={photoURL}

              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter updated photo URL"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a88f]"
            // required

            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write something about yourself..."
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a88f] resize-none"
              rows={3}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00c1a6] text-white hover:bg-[#00a88f] py-3 rounded-lg font-semibold  transition-all"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>

      {/* Extra Tips */}

      <div className="mt-10 max-w-5xl text-center text-gray-500 px-6 md:px-0">
        <p className="mb-1">Tip: Keep your profile updated for better recognition.</p>
        <p>Tip: Verify your email to receive notifications and important updates.</p>
        <p>Tip: Use a strong password and change it regularly.</p>
      </div>
    </div>
  );
};

export default Profile;
