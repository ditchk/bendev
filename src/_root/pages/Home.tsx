// import Featured from "@/components/projects/Featured"
import Brands from "@/components/shared/Brands"
import Services from "@/components/shared/Services"
import Welcome from "@/components/shared/Welcome"

const Home = () => {
  return (
    <div className="default_Container">
      <Welcome />
      {/* <Featured /> */}
      <Brands />
      <Services />
    </div>
  )
}

export default Home
