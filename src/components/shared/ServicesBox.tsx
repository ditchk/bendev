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
        transition: "all 0.1s cubic-bezier(0.17, 0.55, 0.65, 1) 0.3s"
      }}
      ref={ref}
    className="flex flex-col justify-center h-fit w-full items-center p-5 outline outline-1 outline-slate-100">
        <div>
            <h1 className="text_title3 text-shadow">
                {service.productTitle}
            </h1>
        </div>
        <div className="flex flex-col justify-center gap-2 bg-cyan-950 bg-opacity-10 relative outline-1 outline outline-slate-100 p-2 rounded-tr-3xl shadow-sm shadow-cyan-600 hover:shadow-xl duration-1000">
            <div className="flex flex-1 h-20 w-auto shadow-inner shadow-cyan-600 rounded-tr-3xl overflow-hidden rounded-bl-3xl outline outline-2 outline-white">
                <img src={service.imageUrl} loading="lazy" alt={"project Management"} className="hover:filter hover:grayscale duration-1000 cursor-pointer hover:scale-105 w-auto min-h-[10rem] sm:min-h-[12rem] md:min-h-[14rem] lg:min-h-[16rem] rounded-tr-3xl overflow-hidden rounded-bl-3xl"/>
            </div>
            <p className="box-border sm:min-h-[150px] md:min-h-[170px] lg:min-h-[140px] text-sm font-serif font-thin text-teal-900 p-2 m-2 border-t border-slate-100 border-l rounded-tl-xl">
                {service.ProductDescription}
            </p>
            <div className="flex flex-row justify-start items-center">
                <Button className="custom_button ml-2" onClick={handleClick}>
                    <small>Get a quote</small>
                </Button>
                {openWindow && (
                    <div className="container">
                        <MdClose onClick={handleClick} className="flex absolute hover:bg-red-400 justify-end text-end right-0 top-0 text-white text-3xl bg-cyan-950 bg-opacity-40 rounded-bl-xl rounded-tr-xl cursor-pointer" />
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
