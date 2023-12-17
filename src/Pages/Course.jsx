import { useQuery } from "@tanstack/react-query";
import useAxios from "../Components/Hooks/useAxios";
import CourseCard from "../Components/CourseCardDetails/CourseCard";
import { useState } from "react";

const Course = () => {
    const axiosPublic = useAxios()
    const [search, setSearch] = useState("");
    const { data: course = [] , refetch} = useQuery({
        queryKey: ["course"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/course?search=${search}`);
          return res.data;
        },
      });
 
      const handleSearch = (e) => {
        e.preventDefault();
        const val = e.target.search.value;
        setSearch(val);
        console.log(val);
     
        refetch();
      };
   
    return(
        <div className="p-2 md:p-5">
         <div className="flex items-center    border-sky-500  rounded-r mt-10 h-max w-max mx-auto bg-gray-200 justify-center">
        <h1></h1>
        <form onSubmit={handleSearch} action="">
          <input
            placeholder="Search here..."
            className="bg-black  md:w-80 lg:w-96 rounded-l text-white py-2 outline-none px-3 "
            name="search"
            type="text"
          />
          <input
            className="bg-sky-400 cursor-pointer text-white  uppercase rounded-r px-3 py-2"
            type="submit"
            value="Search"
          />
        </form>
      </div>
             <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
                {course.map(item => <CourseCard key={item._id} refetch={refetch}  data={item}/>)}
             </div>
        </div>
    )}
export default Course;