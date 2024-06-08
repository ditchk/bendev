import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {

  return (
    <div className="ServiceContainer">
        <motion.div 
            className="Image-Cont"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <img 
                src={service.imageUrl} 
                alt={"project Management"} 
                width={500} 
                className="ImageUrl-sty"
                loading="lazy"
                
            />
        </motion.div>
        <div
            className="DescrIPTBox">
            <h1 className="BoxText">
                {service.productTitle}
            </h1>
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
    </div>
  )
}

export default ServicesBox
