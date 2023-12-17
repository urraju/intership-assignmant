import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div className="relative top-0">
      <div className="bg-backgroundImage bg-cover  bg-no-repeat bg-current object-contain relative  flex items-center justify-center  h-[400px] w-full">
        <div className="absolute  bg-white/90  h-full w-full  "></div>
        <div className="z-30 font-lexend text-center">
            <h1 className=" text-3xl lg:text-5xl mb-5 font-bold">Develop your career!</h1>

            <TypeAnimation
              className="text-sky-500 font-poppins text-sm  mb-2 mt-5"
              sequence={[
                "Learn Fornt End",
                1000,
                "Learn Mern Stack",
                1000,
                "",
                1000,
                "Learn Full Stack ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

          <p className="text-xl mt-4">You can search for your favorite course and  build a professional <br /> career by joining us</p>
          
        </div>
      </div>
    </div>
  );
};
export default Banner;
