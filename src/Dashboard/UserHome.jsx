import { useQuery } from "@tanstack/react-query";
import useAxios from "../Components/Hooks/useAxios";
import useAuth from "../Components/Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    const axiosPublic = useAxios()
    ();
    const { data: userCourse = [] ,refetch } = useQuery({
      queryKey: ["userCourse"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/userCourse?email=${user.email}`);
        return res.data;
      },
       
    });
    console.log(userCourse);
    return(
        <div>
             <p> HELLO I Am UserHome </p>
        </div>
    )}
export default UserHome;