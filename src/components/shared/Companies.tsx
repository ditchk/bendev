import { FaShopify } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa6"
import { SiAppwrite } from "react-icons/si"

const Companies = () => {



  return (
    <div className="flex flex-row gap-5">
      <div>
         <img src="/assets/images/Seedbox-Technologies.jpg" alt="" className="rounded-lg outline outline-2 w-8 md:w-10 outline-cyan-200 shadow-md shadow-slate-400" width={40} />
      </div>
      <div>
        <FaShopify className="icon_pack2"/>
      </div>
      <div>
        <img src="/assets/images/guru.png" alt="" className="rounded-lg outline outline-2 w-8 md:w-10 outline-cyan-200 shadow-md shadow-slate-400" width={90} />
      </div>
      <div>
        <img src="/assets/images/AdulttimeOriginals.svg" alt="" width={40} className="rounded-lg w-8 md:w-10 bg-black p-1 outline outline-2 outline-cyan-200 shadow-md shadow-slate-400" />
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
