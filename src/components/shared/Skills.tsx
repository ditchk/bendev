import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { BsDatabaseSlash } from "react-icons/bs";
import { SiBlender, SiThreedotjs, SiFramer, SiPrisma } from "react-icons/si";



const Skills = () => {

  return (
    <div className="flex flex-col justify-center items-baseline mt-5 mb-5 md:mt-10 w-full">
        <h1 className="mb-5 text-white underline underline-offset-2 text-2xl font-serif">Featured skills</h1>
      <div className="flex flex-grow gap-2 animate-bounce">
        <FaReact className="icon_pack" />
        <TbBrandNextjs className="icon_pack" />
        <FaPhp className="icon_pack" />
        <SiFramer className="icon_pack" />
        <BsDatabaseSlash className="icon_pack" />
        <SiBlender className="icon_pack" />
        <SiThreedotjs className="icon_pack" />
        <SiPrisma className="icon_pack" />
      </div>
    </div>
  )
}

export default Skills
