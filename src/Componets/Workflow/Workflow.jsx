import { CheckCircle2 } from "lucide-react";
import codeImg from "../../assets/code.jpg";

const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];
const Workflow = () => {
  return (
    <>
      <div className="mt-20">
        {/* heading section  */}
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-white text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide px-2 pb-12">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            coding workflow.
          </span>
        </h2>
        {/* list section  */}
        <div className="flex flex-wrap justify-center">
          <div data-aos="zoom-in" data-aos-delay="300" className="p-2 w-full lg:w-1/2">
            <img src={codeImg} alt="Coding" />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div data-aos="fade-down" data-aos-delay="300" className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div data-aos="fade-down" data-aos-delay="300">
                  <h5 className="text-white mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workflow;
