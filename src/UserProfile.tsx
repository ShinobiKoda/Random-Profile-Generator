import { getUserData } from "./api";
import { useEffect, useState } from "react";
import { Profile } from "./types";
import SkeletonLoader from "./components/SkeletonLoader";

const UserProfile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Profile>();

  const fetchUserProfile = async (): Promise<void> => {
    setLoading(true);
    try {
      const UserData = await getUserData();
      setData(UserData);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  const { first, last, title } = data?.name || {};
  const { gender, email, phone } = data || {};
  const { large: thumbnail } = data?.picture || {};

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 sm:p-8 space-y-8 transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-blue-600">User Profile</h1>
        <button
          onClick={fetchUserProfile}
          className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Refresh
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={`${title} ${first} ${last}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xl font-semibold text-gray-500">
              {title?.[0]}
              {first?.[0]}
              {last?.[0]}
            </span>
          )}
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            {title} {first} {last}
          </h2>
          <p className="text-gray-500">Gender: {gender}</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-gray-700">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-700">
          <strong>Phone No.:</strong> {phone}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
