import { FaSlack } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


const Socials = () => {
  return (
    <div className="flex flex-row gap-3 p-3">
      <FaSlack className="social_icons" />
      <RiInstagramFill className="social_icons" />
      <ImFacebook2 className="social_icons" />
      <FaXTwitter className="social_icons" />
      <SiGmail className="social_icons" />
    </div>
  )
}

export default Socials