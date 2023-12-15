import { useQuery } from "@tanstack/react-query";
import useAxios from "../Components/Hooks/useAxios";
import CourseCard from "../Components/CourseCardDetails/CourseCard";

const Course = () => {
    const axiosPublic = useAxios()
    const { data: course = [] } = useQuery({
        queryKey: ["course"],
        queryFn: async () => {
          const res = await axiosPublic.get("/course");
          return res.data;
        },
      });
      console.log(course);
    return(
        <div className="p-2 md:p-5">
             <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
                {course.map(item => <CourseCard key={item._id} data={item}/>)}
             </div>
        </div>
    )}
export default Course;