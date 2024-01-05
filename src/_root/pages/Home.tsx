// import VideoPlayer from "@/components/shared/VideoPlayer"
import Brands from "@/components/shared/Brands"
import Experience from "@/components/shared/Experience"
import Services from "@/components/shared/Services"
import Welcome from "@/components/shared/Welcome"

const Home = () => {
  
  return (
    <div className="default_Container"> 
      <div className="custom_Homecontainer">
        {/* <VideoPlayer src="https://cloud.appwrite.io/v1/storage/buckets/655777900bd1083e6876/files/6561e25fea7de27f352d/view?project=655773f801147821ba93&mode=admin" /> */}
        <Welcome />
        <Experience />
        <Brands />
        <Services />
      </div> 
    </div>
  )
}

export default Home
