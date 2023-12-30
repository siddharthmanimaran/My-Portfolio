import { DiGithubFull } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { MdMyLocation, MdSimCardDownload } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import { FiPhoneIncoming } from "react-icons/fi";
import Profile from './data/profile.jpeg';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <div>
      <Image src={Profile} alt="Black Avatar" width={120} height={120} objectFit="cover" className="rounded-full" />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-green-500">Siddharth </span>Manimaran
      </h3>
      <p className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full item-center">
        <FaUserTie className="w-6 h-6" /> Fullstack Developer
      </p>
      <a className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full item-center" href="" download="">
        <MdSimCardDownload className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://github.com/siddharthmanimaran" target="_blank">
          <DiGithubFull className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/siddharth-manimaran-2b8994217" target="_blank">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div className="py-4 my-5 bg-gray-200" style={{ marginRight: "-1rem", marginLeft: "-1rem" }}>
        <div className="flex flex-col items-center justify-center space-y-2">

          <div className="flex items-center">
            <MdMyLocation className="mr-2" />
            <span>Chennai, Tamil Nadu</span>
          </div>
          <div className="flex items-center">
            <SiGmail className="mr-2" />
            <span>siddharth.goldengrove@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FiPhoneIncoming className="mr-2" />
            <span>8667385532</span>
          </div>
        </div>
      </div>

      <div>
        <button
          className="w-8/12 px-2 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400"
          onClick={() => window.open("mailto:siddharth.goldengrove@gmail.com")}
        >
          E-mail Me!!
        </button>
        <button className="w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-green-400">
          Light-UI
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
