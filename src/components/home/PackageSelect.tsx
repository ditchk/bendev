import { useState } from "react"
import Basic from "../pricing/Basic"
import Premium from "../pricing/Premium"
import { Switch } from "../ui/switch"

const PackageSelect = () => {

    const [IsActive, setIsActive] = useState(true)

    const handleclick = () => {
        setIsActive(!IsActive)
    }

    return (
        <div id="serivices" className='flex flex-col justify-center gap-2 items-center w-full h-full'>
            <Switch onClick={handleclick} className={`${IsActive && "bg-teal-900 shadow-inner text-black duration-1000 border-2 border-slate-300"}`} />
            {IsActive ? (
                <Basic />
            ) : (
                <Premium />
            )}
        </div>
    )
}

export default PackageSelect