import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import HelmetUse from "../../Hooks/HelmetUse";
const Details = () => {
  const data = useLoaderData();
  const {user} = useAuth()
  const axiosPublic = useAxios()
  const navigate = useNavigate()
  const {
    _id,
    id,
    name,
    instructor,
    description,
    enrollmentStatus,
    thumbnail,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus,
    price,
  } = data;
  
  const handleBuy = () => {
    const buyCourse = {
      courseId : _id,
      name : name,
      instructor : instructor,
      thumbnail : thumbnail,
      userEmail : user?.email,
      userName : user?.displayName
    }
    axiosPublic.post('/userCourse', buyCourse)
    .then(result => {
     console.log(result.data);
     toast.success('Buy Successfull')
     navigate('/')
    })
  }
  return (
    <div className="p-2 md:p-5 mt-10 my-10">
      <HelmetUse helmet={'Details'}/>
      <div className="max-w-screen-2xl flex items-center justify-center mx-auto">
        <div className="font-lexend border-sky-200 w-[800px] border p-1  md:p-3 rounded-xl">
          <img
            className="  rounded-xl"
            src={thumbnail}
            alt=""
          />
          <div className="mt-4">
            <p className="text-xl font-semibold mb-1">
              {" "}
              <span className="text-2xl font-semibold">Name : </span>
              {name}
            </p>
            <p className="font-bold">
              {" "}
              <span className="text-lg font-semibold">Instructor : </span>
              {instructor}
            </p>
            <p>
              {" "}
              <span className="text-lg font-semibold">Description : </span>
              {description}
            </p>

            <p>
              {syllabus.map((item) => (
                <div>
                  <p>
                    <span className="text-lg font-semibold">Topic : </span>
                    {item.topic}
                  </p>
                  <p>
                    <span className="text-lg font-semibold">Content : </span>
                    {item.content}
                  </p>
                </div>
              ))}
              <p>
                <span className="text-lg font-semibold">Prerequistes : </span>
                {prerequisites.map((pres) => (
                  <p>{pres}</p>
                ))}
              </p>
              <p>
                <span className="text-lg font-semibold">Schedule : </span>
                {schedule}
              </p>
            </p>

            <p>
              <span className="text-lg font-semibold">Location : </span>
              {location}
            </p>
            <p>
              <span className="text-lg font-semibold">Duration : </span>
              {duration}
            </p>
           {enrollmentStatus === 'Closed' ?  <p className="text-red-500 ">
              <span className="text-lg text-black font-semibold">Status : </span>
              {enrollmentStatus}
            </p> :  <p className="text-sky-500 ">
              <span className="text-lg text-black font-semibold">Status : </span>
              {enrollmentStatus}
            </p>}
            {price ? (
              <p className="flex items-center  gap-2">
                <span className="text-lg font-semibold">Price : </span>$
                {price ? <p>{price}</p> : ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between py-3">
            <Link to='/'>
              <button className=" border border-sky-200 py-1 text-sm text-sky-700 px-2 flex items-center gap-2 rounded-xl ">
                <IoIosArrowRoundBack className="text-lg" />
                Home
              </button>
            </Link>
            {enrollmentStatus === 'Closed' || enrollmentStatus === 'In Progress' ? <button disabled   className="bg-sky-500 text-sm disabled:bg-sky-300 text-white px-3 py-1 flex items-center gap-2 rounded ">
              Buy Now <IoIosArrowRoundForward className="text-lg mt-1" />
            </button> :  user?.email ?  <button onClick={handleBuy} className="bg-sky-500 text-sm text-white px-3 py-1 flex items-center gap-2 rounded ">
              Buy Now <IoIosArrowRoundForward className="text-lg mt-1" />
            </button> : <Link to='/login'><button    className="bg-sky-500 text-sm disabled:bg-sky-300 text-white px-3 py-1 flex items-center gap-2 rounded ">
              Buy Now <IoIosArrowRoundForward className="text-lg mt-1" />
            </button></Link>}  
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
