import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { FaShopify } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa6"
import { SiAppwrite } from "react-icons/si"

const Companies = () => {

  const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
       
      }, [isInView])

  return (
    <div 
    style={{
      transform: isInView ? "none" : "translateY(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}
    ref={ref}
      className="flex flex-row justify-center items-center gap-3 md:gap-10">
      <div>
         <img src="/assets/images/Seedbox-Technologies.jpg" alt="" className="rounded-lg outline outline-2 w-8 md:w-10 outline-cyan-200 shadow-md shadow-slate-400" width={40} />
      </div>
      <div>
        <FaShopify className="icon_pack2"/>
      </div>
      <div>
        <img src="/assets/images/AdulttimeOriginals.svg" alt="" width={40} className="rounded-lg w-8 md:w-10 bg-black p-1 outline outline-2 outline-cyan-200 shadow-md shadow-slate-400" />
      </div>
      <div>
        <img src="/assets/images/bensworkspace.png" alt="" width={40} className="rounded-lg w-8 md:w-10 bg-black p-1 outline outline-2 outline-cyan-200 shadow-md shadow-slate-400" />
      </div>
      <div>
        <SiAppwrite className="icon_pack2"/>
      </div>
      <div>
        <FaGoogle className="icon_pack2"/>
      </div>
     
    </div>
  )
}

export default Companies
