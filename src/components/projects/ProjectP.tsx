import React from 'react'


interface PlayerProps {
    src: string;
  }

const ProjectP: React.FC<PlayerProps> = ({ src }) => {

    document.addEventListener('DOMContentLoaded', () => {
        const video = document.getElementById('background-video') as HTMLVideoElement;
        video.play();
      });

  return (
    <div className='flex h-auto absolute z-0'>
       <video id="background-video" className="hidden lg:flex object-fill opacity-5 backdrop-blur-sm h-screen md:h-auto" preload='auto' autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default ProjectP
