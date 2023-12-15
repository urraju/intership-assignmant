const Banner = ({handleSearch}) => {
  return (
    <div className="relative top-0">
      <div className="bg-backgroundImage bg-cover  bg-no-repeat bg-current object-contain relative  flex items-center justify-center  h-[500px] w-full">
        <div className="absolute  bg-white/90  h-full w-full  "></div>
        <div className="z-30 font-lexend text-center">
            <h1 className=" text-2xl lg:text-5xl font-bold">Develop your career!</h1>
          <p className="text-xl mt-4">You can search for your favorite course and  build a professional <br /> career by joining us</p>
          <div className=" py-2  px-3 mt-6 relative rounded bg-black inline-block">
            <input
              onChange={handleSearch}
              name="search"
              className="outline-none md:w-80 lg:w-96  text-white bg-transparent"
              type="text"
              placeholder="Search here..."
            />
            <button
              type="button"
              className="bg-sky-500 rounded-r top-0 right-0 absolute  text-white py-2 px-4"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
