import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        {/* Hero text section  */}
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-white text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        >
          VirtualR build tools
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <p
          data-aos="fade-down"
          data-aos-delay="500"
          className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
        >
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <button
            data-aos="fade-down"
            data-aos-delay="800"
            href="#"
            className="text-white bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </button>
          <button
            data-aos="fade-down"
            data-aos-delay="800"
            href="#"
            className="text-white py-3 px-4 mx-3 rounded-md border"
          >
            Documentation
          </button>
        </div>
        {/* Hero Video section  */}
        <div className="flex mt-10 justify-center gap-5">
          <video
            data-aos="fade-right"
            data-aos-delay="500"
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            data-aos="fade-left"
            data-aos-delay="500"
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
