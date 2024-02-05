import BannerPost from "@/components/home/BannerPost"
import IconDump from "@/components/home/IconDump"
import MobileBanner from "@/components/home/MobileBanner"
import Services from "@/components/shared/Services"
import { Slider } from "@/components/sliders/Slider"

const Home = () => {
  return (
    <>
      <Slider />
      <IconDump />
      <MobileBanner />
      <BannerPost />
      <Services />
    </>
  )
}

export default Home
