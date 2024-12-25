// import { useUserProfile } from "../../hooks/useUsere.tsx";
// import GridBusiness from "../../components/BusinessList/BusinessList.tsx";
// import { useState } from "react";
// import EditUser from "@/components/EditUser/EditUser.tsx";

// const UserProfile = () => {
//   const [isProfilePage, setIsProfilePage] = useState(true);
//   const { data, error, isLoading } = useUserProfile();

//   if (isLoading)
//     return <div className="text-yellow-400 text-xl">Loading...</div>;
//   if (error)
//     return (
//       <div className="text-red-600 text-xl">Error fetching user profile</div>
//     );

//   return (
//     <div className="pt-10 flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
//           User Profile
//         </h1>

//         <div className="mb-6 text-center">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="User Avatar"
//             className="w-36 h-36 rounded-full mx-auto shadow-lg hover:scale-105 transform transition duration-300"
//           />
//         </div>

//         <div className="space-y-4">
//           <div>
//             <p className="text-xl font-semibold text-orange-500">Name:</p>
//             <p className="text-lg">{data.name}</p>
//           </div>

//           <div>
//             <p className="text-xl font-semibold text-orange-500">Email:</p>
//             <p className="text-lg">{data.email}</p>
//           </div>

//           <div>
//             <p className="text-xl font-semibold text-orange-500">Plan:</p>
//             <p className="text-lg">{data.plan}</p>
//           </div>

//           <div>
//             <p className="text-xl font-semibold text-orange-500">
//               Your Businesses:
//             </p>
//             <div className="mt-4">
//               {/* Render Businesses Grid */}
//               <GridBusiness
//                 businesses={data.savedBusinesses}
//                 isProfilePage={isProfilePage}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
import { useUserProfile } from "../../hooks/useUsere.tsx";
import GridBusiness from "../../components/BusinessList/BusinessList.tsx";
import { useState } from "react";
import EditUser from "@/components/EditUser/EditUser.tsx";

const UserProfile = () => {
  const [isProfilePage, setIsProfilePage] = useState(true);
  const { data, error, isLoading } = useUserProfile();

  if (isLoading)
    return <div className="text-yellow-400 text-xl">Loading...</div>;
  if (error)
    return (
      <div className="text-red-600 text-xl">Error fetching user profile</div>
    );

  return (
    <div className="pt-10 flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          User Profile
        </h1>

        {/* <div className="mb-6 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-36 h-36 rounded-full mx-auto shadow-lg hover:scale-105 transform transition duration-300"
          />
        </div> */}

        <div className="mt-6 text-center text-black">
          <EditUser user={data} />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xl font-semibold text-orange-500">Name:</p>
            <p className="text-lg">{data.name}</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-orange-500">Email:</p>
            <p className="text-lg">{data.email}</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-orange-500">Plan:</p>
            <p className="text-lg">{data.plan}</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-orange-500">
              Your Businesses:
            </p>
            <div className="mt-4">
              <GridBusiness
                businesses={data.savedBusinesses}
                isProfilePage={isProfilePage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
