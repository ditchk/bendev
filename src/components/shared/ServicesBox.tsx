import { Models } from "appwrite"
import { Button } from "../ui/button"

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from "react"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])
  return (
    <motion.div 
    style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={ref}
    className="flex flex-col justify-center items-center p-5">
        <div className="flex flex-col bg-cyan-950 bg-opacity-10 outline-1 outline outline-slate-100 p-2 min-h-[450px] rounded-tr-3xl">
            <img src={service.imageUrl} alt={"project Management"} className=" w-auto h-60 rounded-tr-3xl overflow-hidden rounded-bl-3xl"/>
            <p className=" box-border min-h-[100px] text-sm text-slate-500 font-normal p-2 m-2 outline-sky-50 outline outline-1">
                {service.ProductDescription}
            </p>
            <div className="flex flex-row justify-start items-center">
                <Button className="custom_button ml-2">
                    Get this service
                </Button>
                <Button className="custom_button ml-2">
                    {'Starting at 200$'}
                </Button>
            </div>
        </div>
        <div>
            <h1 className="text_project">
                {service.productTitle}
            </h1>
        </div>
    </motion.div>
  )
}

export default ServicesBox
