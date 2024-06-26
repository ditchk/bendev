import { FaSlack } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter,FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { Link } from "react-router-dom";


const Socials = () => {
  return (
    <div className="flex flex-col justify-start items-start mr-5">
      <div className="flex flex-row gap-3">
        <Link to={'https://benkigochi5.slack.com/archives/C04SPHHHN4F'}>
          <FaSlack className="social_icons text-red-500 bg-white" />
        </Link>
        <Link to={'https://www.instagram.com/_blackdollar_/'}>
          <RiInstagramFill className="social_icons text-yellow-700 bg-white" />
        </Link>
        <Link to={'https://www.linkedin.com/in/BensonKigoci'}>
          <FaLinkedin className="social_icons text-blue-800 bg-white" />
        </Link>
        <Link to={'/'}>
          <ImFacebook2 className="social_icons text-blue-950 bg-white" />
        </Link>
        <Link to={'https://twitter.com/BKigoci32396'}>
          <FaXTwitter className="social_icons text-black bg-white" />
        </Link>
        <Link to={'mailto:bensonkigoci@gmail.com?subject=I%20would%20like%20to%20schedule%20a%20zoom%20meeting&body=Hello%20there%20Benson%2C%20'}>
          <SiGmail className="social_icons text-green-600 bg-white" />
        </Link>
      </div>
    </div>
    
  )
}

export default Socials

