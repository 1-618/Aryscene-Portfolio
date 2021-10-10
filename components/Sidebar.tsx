import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { BsPhone } from "react-icons/bs";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
     {/* <Image
        src="/../public/portfolio-pic.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
     />*/}
     <br className="h-100"/>
     <br className="h-100"/>
     <br className="h-100"/>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Patua">
        <span className="text-orange font-Patua ">Aryscene</span> Violabian
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500 font-Poppins">
        Software Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/AryVioCV.pdf"
        download="AryVioCV.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <span className="hover:text-red font-Poppins">Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-center w-9/12 mx-auto my-5 text-yellow md:w-full ">
        <a href="https://www.linkedin.com/in/aryscene-violabian-7a9aa6128/" className="mr-2 hover:text-orange">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/1-618 " target="_blank" rel="noreferrer" className="ml-2 hover:text-orange">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center font-Poppins">
          <GoLocation className="mr-2" /> <span>Durban, South Africa </span>
        </div>
        <br></br>
        <div className="flex items-center justify-center font-Poppins">
        <CgMail className="mr-2"/> <span>aryscene@gmail.com</span>
        </div>
        <br></br>
        <div className="flex items-center justify-center font-Poppins">
        <BsPhone className="mr-2"/> <span>060 558 8167</span>
        </div>
      </div>  
      <br></br> 
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer bg-gray bg-gradient-to-r from-red to-yellow focus:outline-none hover:text-black"
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
      <br></br>
      <h6 className="my-4 font-mono text-xs font-semibold tracking-wider font-Roboto">
        <span className="italic text-red">Built with Next.js, Typescript and Tailwindcss</span>
      </h6> 
    </>
  );
};

export default Sidebar;