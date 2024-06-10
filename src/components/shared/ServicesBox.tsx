import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"
import Imageloader from "../loaders/Imageloader"
import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations"
import { motion } from "framer-motion"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {
    const { isPending: isLoading } = useGetAllServices();

  return (
    <motion.div 
        className="ServiceContainer"
        initial={{ opacity: 0.5, scale: 0.9}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
            type: "tween",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
            }
        }}
    >
        <div className="Image-Cont">
            {isLoading ? (
                <Imageloader />
            ) : (
                <img 
                    src={service.imageUrl} 
                    alt={"project Management"} 
                    width={500} 
                    className="ImageUrl-sty"
                    loading="lazy"
                />
            )}
        </div>
        <div className="DescrIPTBox">
            <h4 className="BoxText">
                {service.productTitle}
            </h4>
            <Truncate text={service.ProductDescription} maxLength={200} />
        </div>
        
        <div className="Button-sect mt-10 mb-2">
            <Link reloadDocument to={'/packages/basic'} className="ServLink">
                <small>Request</small>
            </Link>
            <Link to={''} className="ServLink bg-teal-950 text-white">
                <small className="animate-pulse">Starting at 200$</small>
            </Link>
        </div>
    </motion.div>
  )
}

export default ServicesBox
