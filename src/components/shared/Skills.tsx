import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { SiAdobe, SiAdobeillustrator, SiAppwrite, SiAwsamplify, SiAzuredevops, SiBlender, SiFramer, SiGamedeveloper, SiGit, SiGoogleads, SiGooglecloud, SiIbmwatson, SiMicrosoft, SiMicrosoftazure, SiMongodb, SiPostgresql} from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";



const Skills = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row gap-2 opacity-80 p-2">
        <FaReact className="text-3xl text-cyan-900" />
        <TbBrandNextjs  className="text-3xl"/>
        <FaPhp  className="text-3xl"/>
        <SiFramer  className="text-3xl"/>
        <SiGit  className="text-3xl text-slate-800"/>
        <SiBlender className="text-3xl"/>
        <SiAdobe  className="text-3xl text-red-500"/>
        <SiAwsamplify  className="text-3xl text-teal-700"/>
        <SiGooglecloud  className="text-3xl text-yellow-400"/>
        <MdDeveloperBoard className="text-3xl text-fuchsia-700"/>
        <SiAzuredevops className="text-3xl text-blue-600"/>
        <SiIbmwatson className="text-3xl text-blue-900"/>
        <SiMicrosoft className="text-3xl text-cyan-500"/>
        <SiMicrosoftazure  className="text-3xl text-teal-700"/>
        <SiMongodb  className="text-3xl text-green-500"/>
        <SiPostgresql  className="text-3xl"/>
        <SiAppwrite  className="text-3xl text-red-500"/>
        <SiGoogleads className="text-3xl text-yellow-300"/>
        <SiGamedeveloper className="text-3xl"/>
        <SiAdobeillustrator className="text-3xl text-yellow-300" />
        
      </div>
    </div>
  )
}

export default Skills
