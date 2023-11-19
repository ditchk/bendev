import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { BsDatabaseSlash } from "react-icons/bs";
import { SiBlender, SiThreedotjs, SiFramer } from "react-icons/si";



const Skills = () => {

  return (
    <div className="flex flex-col gap-2 mt-24">
        <h1 className="mb-5 text-xl font-serif font-medium">Featured skills</h1>
      <div className="flex flex-grow gap-2">
        <FaReact className="icon_pack" />
        <TbBrandNextjs className="icon_pack" />
        <FaPhp className="icon_pack" />
        <SiFramer className="icon_pack" />
        <BsDatabaseSlash className="icon_pack" />
        <SiBlender className="icon_pack" />
        <SiThreedotjs className="icon_pack" />
      </div>
    </div>
  )
}

export default Skills
