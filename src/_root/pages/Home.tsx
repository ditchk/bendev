import BannerPost from "@/components/home/BannerPost"
import MobileBanner from "@/components/home/MobileBanner"
import MotionIcons from "@/components/home/MotionIcons"
import PackagesSect from "@/components/home/PackagesSect"
import Player from "@/components/home/Player"
import ServiceBox from "@/components/shared/Services"

const Home = () => {
  return (
    <div className="custom_container">
      <Player src={'https://cloud.appwrite.io/v1/storage/buckets/655777900bd1083e6876/files/665f3bf2007954b2e2/view?project=655773f801147821ba93&mode=admin'} />
      <MobileBanner />
      <MotionIcons />
      <BannerPost />
      <PackagesSect />
      <ServiceBox />
    </div>
  )
}

export default Home
