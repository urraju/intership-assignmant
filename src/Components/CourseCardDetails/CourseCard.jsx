import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
const CourseCard = ({ data,refetch }) => {
  const {user} = useAuth()
  const { _id, name, instructor, thumbnail ,like} = data;
  const axiosPublic = useAxios()
  const [liker, setLiker] = useState(like);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    const arr = new Array(liker);
    arr.fill(+1);
    setLikes(arr);
  }, [liker]);
  const handleLike = () => {
    axiosPublic.patch(`/course/update?id=${_id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        setLiker(liker + 1);
        refetch();
      }
    });
  };
  return (
    <div>
      <div className="border relative h-[340px] md:h-80 lg:h-[360px] rounded-xl p-2">
        <img
          className=" w-full mx-auto h-auto  lg:h-44 rounded-xl "
          src={thumbnail}
          alt=""
        />
        <div className="absolute w-full bottom-6 ">
          <div className="mt-1 font-lexend">
            <h1 className="text-lg inline-block font-bold rounded">
              {instructor}
            </h1>
            <h1 className="text-lg font-semibold ">{name}</h1>
          </div>
          <div className="flex items-center px-3 py-1 mt-3 justify-between">


            {user ? (
              <button
                onClick={handleLike}
                className="bg-white border hover:border-green-400 border-sky-400  text-black  px-2 flex items-center  rounded-full p-1 "
              >
                {" "}
                <AiFillLike className="text-md font-light hover:text-black text-sky-500" />
              </button>
            ) : (
              <button
                disabled
                className="bg-white border border-sky-400 disabled:text-sky-200 disabled:border-none text-black px-2 flex items-center font-mono uppercase  rounded-lg "
              >
                {" "}
                <AiFillLike className="text-md border-sky-400 disabled:text-sky-200 font-light   " />{" "}
                
              </button>
            )}
            {like > 0 ?  <button className="flex  items-center gap-2 border border-sky-200 px-3 bg-skyow-300 rounded-full text-black text-">
              
              {like}
            </button> : ''}

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
