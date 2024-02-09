import BannerPost from "@/components/home/BannerPost"
import IconDump from "@/components/home/IconDump"
import MobileBanner from "@/components/home/MobileBanner"
import PackagesSect from "@/components/home/PackagesSect"
import Player from "@/components/home/Player"
import Services from "@/components/shared/Services"


const Home = () => {
  return (
    <div className="custom_container">
      <Player src={'https://cloud.appwrite.io/v1/storage/buckets/655777900bd1083e6876/files/65c689c641370c99c077/view?project=655773f801147821ba93&mode=admin'} /> 
      <MobileBanner />
      <IconDump />
      <BannerPost />
      <PackagesSect />
      <Services />
    </div>
  )
}

export default Home
