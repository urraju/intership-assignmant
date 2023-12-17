
import axios from "axios";

const axiosPublic =  axios.create({
    baseURL : 'https://intership-server-a.vercel.app'
})  
const useAxios = () => {
    return axiosPublic
}
export default useAxios