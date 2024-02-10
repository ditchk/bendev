import BannerPost from "@/components/home/BannerPost"
import IconDump from "@/components/home/IconDump"
import MobileBanner from "@/components/home/MobileBanner"
import PackagesSect from "@/components/home/PackagesSect"
import Player from "@/components/home/Player"
import Services from "@/components/shared/Services"


const Home = () => {
  return (
    <div className="custom_container">
      <Player src={'/assets/videos/welcomev.mp4'} />
      <IconDump /> 
      <MobileBanner />
      <BannerPost />
      <PackagesSect />
      <Services />
    </div>
  )
}

export default Home
