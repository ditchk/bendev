import { useState } from "react"
import PackageSelect from "./PackageSelect"
import { Link } from "react-router-dom"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

const PackagesSect = () => {

  const [openContainer, SetOpenContainer] = useState(false)

  const handleClick = () => {
    SetOpenContainer(!openContainer)
  }
  

  return (
    <div className="packageSection" id="section">
        <div className="ContainerPackage">
            <h2 className="PackText font-bold mb-4">Choose a Package</h2>
            <PackageSelect />
        </div>
        <div className="ContainerExplaPackage relative">
          <div className="flex flex-row justify-between items-center bg-black bg-opacity-10 gap-10 p-2 outline outline-2 outline-slate-300 rounded-full cursor-pointer" onClick={handleClick}>
            <h1 className="PackageTitleText">Understand Our Pricing</h1>
              {!openContainer ? (
                <FaAngleDown className="bg-black rounded-full text-xl cursor-pointer outline outline-2 outline-slate-300 text-white text-center" onClick={handleClick}/>
              ) : (
                <FaAngleUp  className="bg-black rounded-full text-xl cursor-pointer outline outline-2 outline-slate-300 text-white text-center" onClick={handleClick}/>
              )}
          </div>
          {openContainer && (
            <div className="flex flex-col justify-center items-center bg-black bg-opacity-10 rounded-2xl p-3 animate-in slide-in-from-bottom-10 top-16 duration-1000 ">
              <h1 className="ExplainText">We offer a wide variety of services.This way we have clearly outline the packages that best suit your needs</h1>
              <p className="text-xs text-white text-start">We understand we might not mention or cover what you maybe be intrested in, for this reason we ask you to send us a message on our contact page and we will reach out to you with a solution</p>
              <Link to={'/contact'} reloadDocument className="p-2 mt-10 bg-black text-white outline outline-2 outline-white bg-opacity-20 hover:bg-opacity-70">Reach Out!</Link>
            </div>
          )}
       </div>
    </div>
  )
}

export default PackagesSect