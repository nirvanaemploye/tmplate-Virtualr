import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

const Navbar = () => {
  const [humburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!humburger);
  };
  return (
    <nav data-aos="fade" data-aos-delay="300" className="static top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative text-sm text-primary ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10  mr-2" src={logo} alt="" />
            <span className="text-xl text-white font-semiboldbold tracking-tight ">VirtualR</span>
          </div>
          {/* Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-white hover:text-gray-300 hover:scale-125 hover:duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* butiton div */}
          <div className="hidden lg:flex items-center justify-center space-x-10">
            <a href="#" className="py-2 px-3 border text-white rounded-md">
              Sing in
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
            >
              Create an Account
            </a>
          </div>
          {/* humburger section  */}
          <div className="lg:hidden md:flex flex-col  justify-end">
            <button onClick={toggleHamburger}>
              {humburger ? <X /> : <Menu className="text-orange-600" />}
            </button>
          </div>
        </div> 
        {humburger && (
          <div className="fixed right-0  z-20 bg-neutral-900 w-full p-12 flex-col gap-4 flex justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md text-white">
                Sing in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
