import { BasicServ } from "@/constants"
import { BasicServLink } from "@/types"
import { Button } from "../ui/button"
import { useNavigate } from "react-router"

const Basic = () => {

    const Navigate = useNavigate()

    const handleclick = () => {
        Navigate('/packages/basic')
    }

  return (
    <div className="BasicPackageBox">
        <span className="PackageText">Basic package</span>
        <div className="flex flex-col justify-center items-center p-2">
            <div className="PriceTag">
                <s className="OriginalHrp">70$/hr</s>
                <span className="text-2xl font-serif font-bold text-teal-500">50$/hr</span>
            </div>
            <div className="servicesInBasic">
                <p className="text-sm md:text-lg text-gray-700"><strong>What is included in the basic package?</strong></p>
                {BasicServ.map((link: BasicServLink) => {
                    return (
                        <li className="listText">{link.title}</li>
                    )
                })}
            </div>
            <div className="BoxAdsOn">
                <h1 className="adssOnTitle"><strong>Adds on</strong></h1>
                    <ul className="AdsOnList">
                        <li>
                            2 free sessions per year for website management
                        </li>
                        <li>
                            Ultra fast delivery for your project
                        </li>
                        <li>
                            3 free revisions
                        </li>
                        <li>
                            24/hr support if needed
                        </li>
                        <li>
                            Get daily workkload updates
                        </li>
                    </ul>
            </div>
            <Button className="mt-2" onClick={handleclick}>Get Started</Button>
        </div>
    </div>
  )
}

export default Basic