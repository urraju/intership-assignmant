import { IoIosArrowRoundBack, IoMdArrowDropright } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
const Details = () => {
  const data = useLoaderData();
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
  console.log(data);
  return (
    <div className="p-2 md:p-5 mt-10 my-10">
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
            <button className="bg-sky-500 text-sm text-white px-3 py-1 flex items-center gap-2 rounded ">
              Buy course <IoIosArrowRoundForward className="text-lg mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
