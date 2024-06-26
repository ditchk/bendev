import { useState } from "react"
import Basic from "../pricing/Basic"
import Premium from "../pricing/Premium"

const PackageSelect = () => {

    // const [IsActive, setIsActive ] = useState(true)

    // const handleclick = () => {
    //     setIsActive(!IsActive)
    // }

    const [Subscript, setSubscript] = useState(false)

    const ChoosePack = () => {
        setSubscript(true)
    }

    const ChoosePack2 = () => {
        setSubscript(false)
    }

    return (
        <div id="serivices" className='flex flex-col justify-center gap-2 items-center w-full h-full'>
              <div className="ChoseBtnBOX">
                <button  className={`ChoseBtn bg-black text-white `} onClick={ChoosePack}>
                    Hourly
                </button>
                <button className={`ChoseBtn bg-teal-950 text-white`} onClick={ChoosePack2}>
                    Fixed Budget
                </button>
            </div>
         {Subscript ? (
            <Basic />
         ) : (
            <Premium />
         )}
        </div>
    )
}

export default PackageSelect