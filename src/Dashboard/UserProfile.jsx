import useAuth from "../Components/Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <div className="bg-gradient-to-br md:px-10 md:py-5  rounded-lg  h-max to-sky-700  from-sky-500">
        <div className="backdrop-blur p-5 rounded-lg md:rounded-xl bg-white/20">
          <img
            className=" w-32 border p-2 rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <div className="text-white mt-3">
            <p className=" px-2 py-1 text-xl  text-violet-200 rounded mb-2 border-violet-400">
              <span className="text-lg text-violet-700 font-semibold">
                Name :{" "}
              </span>
              {user?.displayName}
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-violet-400">
              <span className="text-lg text-violet-700 font-semibold">
                Email :{" "}
              </span>
              {user?.email}
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-violet-400">
              <span className="text-lg text-violet-700 font-semibold">
                Home :{" "}
              </span>
              Set Your Home
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-violet-400">
              <span className="text-lg text-violet-700 font-semibold">
                Age :{" "}
              </span>
              Set Your Age
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-violet-400">
              <span className="text-lg text-violet-700 font-semibold">
                Education :{" "}
              </span>
              Set Your Education
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
