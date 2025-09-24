// import React from "react";

// const Profile = () => {
//   const user = {
//     name: "Ayush Kumar",
//     email: "ayush1@example.com",
//     joined: "Sept 2025",
//     role: "User",
//     bio: "Passionate MERN stack developer 🚀 | Loves building full-stack apps 💻",
//     location: "Noida, India",
//   };

//   return (
//     <div className="p-8 bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 min-h-screen flex items-center justify-center animate-fadeIn">
//       <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-500">
//         {/* Header */}
//         <div className="flex items-center space-x-6 mb-8 animate-slideInLeft">
//           <div className="relative">
//             <img
//               src="https://via.placeholder.com/100"
//               alt="profile"
//               className="rounded-full w-28 h-28 border-4 border-blue-400 shadow-lg"
//             />
//             <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
//           </div>
//           <div>
//             <h1 className="text-4xl font-bold text-gray-900 drop-shadow-lg">{user.name}</h1>
//             <p className="text-gray-700">{user.email}</p>
//             <span className="inline-block mt-2 bg-gradient-to-r from-blue-300 to-blue-500 text-white text-sm px-4 py-1 rounded-full shadow-md animate-pulse">
//               {user.role}
//             </span>
//           </div>
//         </div>

//         {/* Bio Section */}
//         <div className="mb-8 animate-slideInRight">
//           <h2 className="text-xl font-semibold text-gray-800 mb-3">About Me</h2>
//           <p className="text-gray-700">{user.bio}</p>
//         </div>

//         {/* Info Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300">
//             <p className="text-gray-600 text-sm mb-1">📅 Joined</p>
//             <p className="text-gray-900 font-semibold text-lg">{user.joined}</p>
//           </div>
//           <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300">
//             <p className="text-gray-600 text-sm mb-1">📍 Location</p>
//             <p className="text-gray-900 font-semibold text-lg">{user.location}</p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-5">
//           <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-2xl shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition transform duration-300">
//             Edit Profile
//           </button>
//           <button className="flex-1 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 py-3 rounded-2xl shadow-lg hover:scale-105 hover:from-gray-400 hover:to-gray-500 transition transform duration-300">
//             Account Settings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";

const Profile = () => {
  const user = {
    name: "Ayush Kumar",
    email: "ayush1@example.com",
    joined: "Sept 2025",
    role: "User",
    bio: "Passionate MERN stack developer 🚀 | Loves building full-stack apps 💻",
    location: "Noida, India",
  };

  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 min-h-screen flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-12 w-full max-w-3xl transform transition-all hover:scale-105 duration-500">
        {/* Header */}
        <div className="flex items-center space-x-8 mb-10 animate-fadeIn">
          <div className="relative group">
            <img
              src="6.jpg"
              alt="profile"
              className="rounded-full w-28 h-28 border-4 border-blue-400 shadow-xl transform transition-transform group-hover:scale-110"
            />
            <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-ping"></span>
          </div>
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg animate-bounce">
              {user.name}
            </h1>
            <p className="text-gray-700 mt-1">{user.email}</p>
            <span className="inline-block mt-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm px-5 py-1 rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300">
              {user.role}
            </span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-10 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 p-6 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 duration-300 animate-slideInLeft">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">About Me</h2>
          <p className="text-gray-700">{user.bio}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 animate-fadeIn">
            <p className="text-gray-600 text-sm mb-1">📅 Joined</p>
            <p className="text-gray-900 font-semibold text-lg">{user.joined}</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 animate-fadeIn delay-100">
            <p className="text-gray-600 text-sm mb-1">📍 Location</p>
            <p className="text-gray-900 font-semibold text-lg">{user.location}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-6">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-3xl shadow-lg hover:scale-110 hover:shadow-2xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 animate-bounce">
            Edit Profile
          </button>
          <button className="flex-1 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 py-3 rounded-3xl shadow-lg hover:scale-110 hover:shadow-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 animate-bounce delay-200">
            Account Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
