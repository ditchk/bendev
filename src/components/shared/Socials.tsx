import { FaSlack } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";


const Socials = () => {
  return (
    <div className="flex flex-row gap-3 p-3">
      <Link to={'https://benkigochi5.slack.com/archives/C04SPHHHN4F'}>
        <FaSlack className="social_icons" />
      </Link>
      
      <RiInstagramFill className="social_icons" />
      <ImFacebook2 className="social_icons" />
      <FaXTwitter className="social_icons" />
      <SiGmail className="social_icons" />
    </div>
  )
}

export default Socials

