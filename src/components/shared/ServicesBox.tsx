import { Models } from "appwrite"
import { Button } from "../ui/button"

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import Truncate from "../truncate/Truncate"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {

      }, [isInView])

      const Navigate = useNavigate()

        const handleclick = () => {
            Navigate('/packages/premium')
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
        <div className="titleBox">
            <h1 className="BoxText">
                {service.productTitle}
            </h1>
        </div>
        <div className="ServiceContainer">
            <div className="Image-Cont">
                <img src={service.imageUrl} loading="lazy" alt={"project Management"} width={450} className="ImageUrl-sty"/>
            </div>
            <Truncate text={service.ProductDescription} maxLength={200} />
            <div className="Button-sect mt-10 mb-2">
                <Button className="NavButton border-white border-2" onClick={handleclick}>
                    <small>Get a quote</small>
                </Button>
                <Button className="NavButton border-white border-2">
                    <small className="animate-pulse">Starting at 200$</small>
                </Button>
            </div>
        </div>
    </motion.div>
  )
}

export default ServicesBox
