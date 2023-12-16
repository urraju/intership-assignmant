import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
const CourseCard = ({ data }) => {
  const {user} = useAuth()
  const { _id, name, instructor, thumbnail ,like} = data;
  const axiosPublic = useAxios()
  // const [liker, setLiker] = useState(liker);
  // const [likes, setLikes] = useState([]);
  // useEffect(() => {
  //   const arr = new Array(liker);
  //   arr.fill(+1);
  //   setLikes(arr);
  // }, [liker]);
  // const handleLike = () => {
  //   axiosPublic.patch(`/course/update?id=${_id}`).then((res) => {
  //     if (res.data.modifiedCount > 0) {
  //       setLiker(liker + 1);
  //       refetch();
  //     }
  //   });
  // };
  return (
    <div>
      <div className="border relative h-[340px] md:h-80 lg:h-[360px] rounded-xl p-2">
        <img
          className=" w-full mx-auto h-auto  lg:h-52 rounded-xl "
          src={thumbnail}
          alt=""
        />
        <div className="absolute w-full bottom-4">
          <div className="mt-3 font-lexend">
            <h1 className="text-lg inline-block font-bold rounded">
              {instructor}
            </h1>
            <h1 className="text-lg font-semibold ">{name}</h1>
          </div>
          <div className="flex items-center px-3 py-1 justify-between">


            {/* {user ? (
              <button
                onClick={handleLike}
                className="bg-white border border-yellow-400  text-black  px-2 flex items-center  rounded-lg p-1 "
              >
                {" "}
                <AiFillLike className="text-md font-light text-yellow-500" />
              </button>
            ) : (
              <button
                disabled
                className="bg-white border border-yellow-400 disabled:text-gray-300 disabled:border-none text-black px-2 flex items-center font-mono uppercase  rounded-lg "
              >
                {" "}
                like{" "}
                
              </button>
            )} */}


            <p className="uppercase text-sm font-semibold">Details</p>
            <Link className="px-3" to={`/details/${_id}`}>
              <p className="bg-sky-100 rounded-full p-1  text-sky-700">
                <IoIosArrowRoundForward className="text-lg" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
