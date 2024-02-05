import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { SiAdobe, SiAppwrite, SiAwsamplify, SiAzuredevops, SiBlender, SiFramer, SiGit, SiGooglecloud, SiIbmwatson, SiMicrosoft, SiMicrosoftazure, SiMongodb, SiPostgresql} from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";



const Skills = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-grow gap-2">
        <FaReact />
        <TbBrandNextjs />
        <FaPhp />
        <SiFramer />
        <SiGit />
        <SiBlender/>
        <SiAdobe />
        <SiAwsamplify />
        <SiGooglecloud />
        <MdDeveloperBoard/>
        <SiAzuredevops/>
        <SiIbmwatson/>
        <SiMicrosoft />
        <SiMicrosoftazure />
        <SiMongodb />
        <SiPostgresql />
        <SiAppwrite />
      </div>
    </div>
  )
}

export default Skills
