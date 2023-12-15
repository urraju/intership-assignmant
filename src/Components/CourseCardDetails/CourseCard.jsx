import { AiOutlineLike } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const CourseCard = ({ data }) => {
  console.log(Object.keys(data).join(","));
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
    bgColor,
  } = data;
  return (
    <div>
      <div className="border relative h-[360px] rounded-xl p-2">
        <img
          className=" w-full mx-auto md:h-52 rounded-xl "
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
          <div className="flex items-center px-5 py-3 justify-between">
            <p className="text-xl text-sky-500">
              <AiOutlineLike />
            </p>
            <p className="uppercase text-sm font-semibold">Details</p>
            <Link to={`/details/${_id}`}>
              <p className="bg-sky-100 rounded-full p-1 text-sky-700">
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
