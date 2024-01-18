import { Models } from "appwrite"
import { Button } from "../ui/button"

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from "react"
import HireRequest from "./HireRequest"
import { MdClose } from "react-icons/md"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {
    const [openWindow, setOpenwindow] = useState(false);
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {

      }, [isInView])

      const handleClick = () => {
        setOpenwindow(!openWindow)
      }

  return (
    <motion.div 
    style={{
        transform: isInView ? "none" : "translateY(10px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.7, 0.55, 0.65, 1) 0.5s"
      }}
      ref={ref}
    className="serviceBox">
        <div>
            <h1 className="BoxText">
                {service.productTitle}
            </h1>
        </div>
        <div className="ServiceContainer">
            <div className="Image-Cont">
                <img src={service.imageUrl} loading="lazy" alt={"project Management"} className="ImageUrl-sty"/>
            </div>
            <p className="Descript_text">
                {service.ProductDescription}
            </p>
            <div className="Button-sect">
                <Button className="custom_button ml-2" onClick={handleClick}>
                    <small>Get a quote</small>
                </Button>
                {openWindow && (
                    <div className="container">
                        <MdClose onClick={handleClick} className="MDclose" />
                        <HireRequest />
                    </div>
                )}
                <Button className="custom_button ml-2">
                    <small className="animate-pulse">Starting at 200$</small>
                </Button>
            </div>
        </div>
        
    </motion.div>
  )
}

export default ServicesBox
