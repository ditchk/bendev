import { Models } from "appwrite"
import { Button } from "../ui/button"

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from "react"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    useEffect(() => {

      }, [isInView])

  return (
    <div className="serviceBox">
        <motion.div 
            style={{
                transform: isInView ? "none" : "translateX(10px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.7, 0.55, 0.65, 1) 0.5s"
            }}
            ref={ref} 
            // onClick={handleclick}
            className="titleBox">
            <h1 className="BoxText">
                {service.productTitle}
            </h1>
        </motion.div>
        <Link reloadDocument to={`/packages/premium`} className="w-full">
            <motion.div
            style={{
                transform: isInView ? "none" : "translateX(-10px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.7, 0.55, 0.65, 1) 0.5s"
              }}
              ref={ref}
            className="ServiceContainer">
            <div className="Image-Cont">
                <img src={service.imageUrl} loading="lazy" alt={"project Management"} width={450} className="ImageUrl-sty"/>
            </div>
            <Truncate text={service.ProductDescription} maxLength={200} />
            <div className="Button-sect mt-10 mb-2">
                <Button className="NavButton border-white border-2">
                    <small>Get a quote</small>
                </Button>
                <Button className="NavButton border-white border-2">
                    <small className="animate-pulse">Starting at 200$</small>
                </Button>
            </div>
         </motion.div>
        </Link>
    </div>
  )
}

export default ServicesBox
