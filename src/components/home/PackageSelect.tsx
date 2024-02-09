import { useState } from "react"
import Basic from "../pricing/Basic"
import Premium from "../pricing/Premium"
import { Switch } from "../ui/switch"

const PackageSelect = () => {

    const [IsActive, setIsActive] =useState(false)

    const handleclick =() => {
        setIsActive(!IsActive)
    }

  return (
    <div className='flex flex-col justify-center gap-2 items-center w-full h-screen'>
        <Switch onClick={handleclick} />
        {IsActive ? (
            <Premium />
        ): (
            <Basic />
        )}
    </div>
  )
}

export default PackageSelect