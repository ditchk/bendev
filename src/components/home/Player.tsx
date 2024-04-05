import React, { useState } from 'react'
import Cards from '../shared/Cards';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


interface PlayerProps {
  src: string;
}

const Player: React.FC<PlayerProps> = ({ src }) => {

  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    window.location.hash = 'Choose a services';
    setShowSection(!showSection);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    video.play();
  });

  const Navigate = useNavigate()

  const handleclick = () => {
      Navigate('/blogs')
  }


  return (
    <div className="Player">
      <video id="background-video" className="video" preload='auto' autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
      <div className='flex justify-end mt-[29rem] lg:mt-[35rem] xl:mt-[37.5rem] bg-white h-14 md:h-14 z-10 rounded-t-3xl w-screen absolute ' />
      <div className="PlayerItems">
        <div className="ItemBox-Div">
          <h1 className="BrandName">Welcome to Bswp</h1>
          <h2 className='BrandName2'>Home for Modern websites</h2>
          <p className="TextDescription">We strive to make the best of what we have <br />and create something truly special.</p>
          <div className='flex flex-row justify-center items-center gap-2'>
            <Link to={'#Choose a services'} className="BlogLink mt-5 z-40" onClick={handleClick}>Get Started</Link>
            <Link to={'/blogs'} reloadDocument className="BlogLink mt-5 z-40" onClick={handleclick}>Blog Library</Link>
          </div>
        </div>
        <div className="Cards">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Player