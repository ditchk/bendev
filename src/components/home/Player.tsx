import React, { useState } from 'react'
import { FaAnglesDown } from "react-icons/fa6";
import { Button } from '../ui/button';



interface PlayerProps {
    src: string;
  }

const Player: React.FC<PlayerProps> = ({ src }) => {

  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    window.location.hash = 'services';
    setShowSection(!showSection);
  };

  return (
    <div className="Player">
        <video id="background-video" className="video" preload='auto' height={100} autoPlay muted loop>
            <source src={src} type="video/mp4"/>
        </video>
        <div className="PlayerItems">
            <div className="flex flex-col justify-center items-center">
                <h1 className="BrandName ">WELCOME TO BSWP</h1>
                <p className="TextDescription">We strive to make the best of what we have and create something truly special.</p>
                <FaAnglesDown className="hidden md:flex text-2xl mt-2 md:mt-10 lg:mt-24 animate-bounce cursor-pointer" onClick={scrollTo} />
                <Button className="mt-5" onClick={handleClick}>Explore Now</Button>
            </div>
        </div>
    </div>
  )
}

export default Player