import useAuth from "../Components/Hooks/useAuth";

const UserProfile = () => {
    const {user} = useAuth()
    return(
        <div className="w-full">
             <div className="bg-gradient-to-br px-10 py-5  rounded-lg  h-screen to-rose-950 from-violet-500">
               <div className="backdrop-blur p-5 rounded-xl bg-white/20">
               <img className="border p-2 rounded-full" src={user?.photoURL} alt="" />
                <div className="text-white mt-3">
                    <p className="border px-2 py-1 text-xl  text-violet-200 rounded mb-2 border-violet-400"><span className="text-lg text-violet-700 font-semibold">Name  : </span>{user?.displayName}</p>
                    <p className="border px-2 py-1 rounded mb-2 border-violet-400"><span className="text-lg text-violet-700 font-semibold">Email : </span>{user?.email}</p>
                    <p className="border px-2 py-1 rounded mb-2 border-violet-400"><span className="text-lg text-violet-700 font-semibold">Home : </span>Set Your Home</p>
                    <p className="border px-2 py-1 rounded mb-2 border-violet-400"><span className="text-lg text-violet-700 font-semibold">Age   : </span>Set Your Age</p>
                    <p className="border px-2 py-1 rounded mb-2 border-violet-400"><span className="text-lg text-violet-700 font-semibold">Education : </span>Set Your Education</p>
                </div>
               </div>
             </div>
        </div>
    )}
export default UserProfile;