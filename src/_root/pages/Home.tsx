import BannerPost from "@/components/home/BannerPost"
import MobileBanner from "@/components/home/MobileBanner"
import PackagesSect from "@/components/home/PackagesSect"
import Player from "@/components/home/Player"
import ServicesBox from "@/components/shared/ServicesBox"
import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations"
import { Models } from "appwrite"
import { motion } from "framer-motion"

const Home = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="custom_container">
      <div className="PlayerBox">
        <Player src={'https://cloud.appwrite.io/v1/storage/buckets/655777900bd1083e6876/files/665f3bf2007954b2e2/view?project=655773f801147821ba93&mode=admin'} />
      </div>
      <div className="BannerBox">
        <MobileBanner />
      </div>
      <div className="BannerBox">
        <BannerPost />
      </div>
      <div className="PackageBox">
        <PackagesSect />
      </div>
      <div className="serviceBox">
      <div className="MainServiceBox" id="Choose a services">
        <h1 className="PackText font-bold mb-4">Choose a service</h1>
        <div>
          {!isLoading && (
            <motion.ul 
              className="grid grid-cols-1 sp:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full"
              variants={container}
              initial="hidden"
              whileInView="animate"
              animate="visible"
            >
              {products?.documents.map((service: Models.Document) => (
                <motion.li 
                  key={service.productTitle} 
                  className="ServiceList"
                  variants={item}
                >
                  <ServicesBox service={service} key={service.productTitle} />
                </motion.li>
              ))}
          </motion.ul>
          )}
        </div>
    </div>
      </div>
    </div>
  )
}

export default Home
