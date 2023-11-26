// import VideoPlayer from "@/components/shared/VideoPlayer"
import Welcome from "@/components/shared/Welcome"

// import { FaHandPointLeft,  FaHandPointRight  } from "react-icons/fa6";


const Home = () => {
  return (
    <div className="default_Container">
      
      <div className="custom_container">
        {/* <VideoPlayer src="https://cloud.appwrite.io/v1/storage/buckets/655777900bd1083e6876/files/6561e25fea7de27f352d/view?project=655773f801147821ba93&mode=admin" /> */}
        <Welcome />
      </div> 
    </div>
  )
}

export default Home
