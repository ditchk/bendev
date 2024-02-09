import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";
import { Button } from '../ui/button';



interface PlayerProps {
    src: string;
  }

const Player: React.FC<PlayerProps> = ({ src }) => {
  return (
    <div className="Player">
        <video id="background-video" className="video" height={100} autoPlay muted loop>
            <source src={src} type="video/mp4" />
        </video>
        <div className="PlayerItems">
            <div className="flex flex-col justify-center items-center">
                <h1 className="BrandName ">WELCOME TO BSWP</h1>
                <p className="TextDescription">We strive to make the best of what we have and create something truly special.</p>
                <FaAnglesDown className="text-4xl mt-2 md:mt-10 lg:mt-24 animate-bounce cursor-pointer" onClick={scrollTo} />
                <Button>Explore  Now</Button>
            </div>
        </div>
    </div>
  )
}

export default Player