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
        <div className="flex flex-col bg-cyan-950 bg-opacity-10 relative outline-1 outline outline-slate-100 p-2 min-h-[450px] rounded-tr-3xl shadow-sm shadow-cyan-600">
            <img src={service.imageUrl} loading="lazy" alt={"project Management"} className="w-auto h-fit sm:h-64 md:h-60 rounded-tr-3xl overflow-hidden rounded-bl-3xl"/>
            <p className=" box-border sm:min-h-[180px] min-h-[150px] text-sm text-slate-800 font-normal p-2 m-2 border-t border-slate-100 border-l rounded-tl-xl">
                {service.ProductDescription}
            </p>
            <div className="flex flex-row justify-start items-center">
                <Button className="custom_button ml-2" onClick={handleClick}>
                    Get this service
                </Button>
                {openWindow && (
                    <div className="container">
                        <MdClose onClick={handleClick} className="flex absolute hover:bg-red-400 justify-end text-end right-0 top-0 text-white text-3xl bg-cyan-950 bg-opacity-40 rounded-bl-xl rounded-tr-xl cursor-pointer" />
                        <HireRequest />
                    </div>
                )}
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
