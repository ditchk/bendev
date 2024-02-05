import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { SiAdobe, SiAppwrite, SiAwsamplify, SiAzuredevops, SiBlender, SiFramer, SiGit, SiGooglecloud, SiIbmwatson, SiMicrosoft, SiMicrosoftazure, SiMongodb, SiPostgresql} from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";



const Skills = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-1 gap-2 opacity-80">
        <FaReact className="text-3xl" />
        <TbBrandNextjs  className="text-3xl"/>
        <FaPhp  className="text-3xl"/>
        <SiFramer  className="text-3xl"/>
        <SiGit  className="text-3xl"/>
        <SiBlender className="text-3xl"/>
        <SiAdobe  className="text-3xl"/>
        <SiAwsamplify  className="text-3xl"/>
        <SiGooglecloud  className="text-3xl"/>
        <MdDeveloperBoard className="text-3xl"/>
        <SiAzuredevops className="text-3xl"/>
        <SiIbmwatson className="text-3xl"/>
        <SiMicrosoft className="text-3xl"/>
        <SiMicrosoftazure  className="text-3xl"/>
        <SiMongodb  className="text-3xl"/>
        <SiPostgresql  className="text-3xl"/>
        <SiAppwrite  className="text-3xl"/>
      </div>
    </div>
  )
}

export default Skills
