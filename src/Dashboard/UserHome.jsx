import { useQuery } from "@tanstack/react-query";
import useAxios from "../Components/Hooks/useAxios";
import useAuth from "../Components/Hooks/useAuth";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const UserHome = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const axiosPublic = useAxios();

  const { data: userCourse = [], refetch } = useQuery({
    queryKey: ["userCourse", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/userCourse?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(userCourse);
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center mb-6">
        <p className="uppercase  mb-4 text-4xl">My Course</p>
        <h1 className="uppercase text-sky-500 ">paid Course</h1>
      </div>
      {userCourse.length === 0 ? (
        <div>
          <p className="text-center  text-sky-500 text-2xl">
            You have no purchased courses You can click <br /> the button to
            purchase any course
          </p>
          <Link to="/">
            <button className="bg-sky-500 text-sm mx-auto mt-10 disabled:bg-sky-300 text-white px-3 py-1 flex items-center gap-2 rounded ">
              <IoIosArrowRoundBack className="text-lg mt-1" /> Go Home
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto bg-sky-100 h-max">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-sky-300">
                <th className="uppercase font-lexend font-bold">NO</th>
                <th className="uppercase font-lexend font-bold">Image</th>
                <th className="uppercase font-lexend font-bold">Name</th>
                <th className="uppercase font-lexend font-bold">
                  Instructor Name
                </th>
                <th className="uppercase font-lexend font-bold">See Details</th>
              </tr>
            </thead>
            <tbody>
              {userCourse.map((course, index) => (
                <tr key={course._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-20 rounded-md"
                      src={course.thumbnail}
                      alt=""
                    />
                  </td>
                  <td>
                    <p className="font-semibold">{course.name}</p>
                  </td>
                  <td>
                    <p className="font-bold">{course.instructor}</p>
                  </td>

                  <td>
                    <Link to={`/details/${course.courseId}`}>
                      <button className="bg-cyan-500 rounded text-white px-2 py-1">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default UserHome;
