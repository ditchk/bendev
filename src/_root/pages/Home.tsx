
import Brands from "@/components/shared/Brands"
import Experience from "@/components/shared/Experience"
import Services from "@/components/shared/Services"
import Welcome from "@/components/shared/Welcome"

const Home = () => {
  
  return (
    <div className="default_Container"> 
      <div className="custom_Homecontainer">
      <iframe src="https://geo.dailymotion.com/player/xndrv.html?video=" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen width="640" height="360"></iframe>
        <Welcome />
        <Experience />
        <Brands />
        <Services />
      </div> 
    </div>
  )
}

export default Home
