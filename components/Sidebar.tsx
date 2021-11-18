import { DiGithubFull } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { MdMyLocation, MdSimCardDownload } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/79979635?v=4"
        alt="Black Avatar"
        className="w-32 h-32 mx-auto rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-500">Siddharth </span>Manimaran
      </h3>
      <p className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full item-center">
        <FaUserTie className="w-6 h-6" />
        Developer
      </p>

      <a
        className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full item-center"
        href=""
        download=""
      >
        {" "}
        <MdSimCardDownload className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <DiGithubFull className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginRight: "-1rem", marginLeft: "-1rem" }}
      >
        <div className="flex items-center justify-center ">
          <MdMyLocation />
          Chennai,TamilNadu
        </div>
        <div className="my-2">siddharth.maaran@gmail.com</div>
        <div className="my-2">8667385532</div>
      </div>

      <div>
        <button
          className="w-8/12 px-2 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400"
          onClick={() => window.open("mailto:siddharth.maaran@gmail.com")}
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
