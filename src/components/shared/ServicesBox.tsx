import { Models } from "appwrite"

import { motion } from 'framer-motion'
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {

  return (
    <div className="serviceBox">
        <motion.div
            // onClick={handleclick}
            className="titleBox">
            <h1 className="BoxText">
                {service.productTitle}
            </h1>
        </motion.div>
            <motion.div
                className="ServiceContainer">
            <div className="Image-Cont">
                <img src={service.imageUrl} loading="lazy" alt={"project Management"} width={450} className="ImageUrl-sty"/>
            </div>
            <Truncate text={service.ProductDescription} maxLength={200} />
            <div className="Button-sect mt-10 mb-2">
                <Link reloadDocument to={'/packages/basic'} className="BlogLink border-white border-2">
                    <small>Get a quote</small>
                </Link>
                <Link to={''} className="BlogLink border-white border-2">
                    <small className="animate-pulse">Starting at 200$</small>
                </Link>
            </div>
         </motion.div>
    </div>
  )
}

export default ServicesBox
