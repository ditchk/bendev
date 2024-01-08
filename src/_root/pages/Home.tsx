import Brands from "@/components/shared/Brands"
import Experience from "@/components/shared/Experience"
import Services from "@/components/shared/Services"
import Welcome from "@/components/shared/Welcome"

const Home = () => {
  return (
    <div className="default_Container"> 
      <div className="custom_Homecontainer">
        <Welcome />
        <Experience />
        <Brands />
        <Services />
      </div> 
    </div>
  )
}

export default Home
