import { BasicServ } from "@/constants"
import { BasicServLink } from "@/types"
import { Button } from "../ui/button"
import { useNavigate } from "react-router"
import { TbClockHour4 } from "react-icons/tb"

const Basic = () => {

    const Navigate = useNavigate()

    const handleclick = () => {
        Navigate('/packages/basic')
    }

  return (
    <div className="BasicPackageBox">
        <TbClockHour4 className="text-4xl" />
        <div className="flex flex-col justify-center items-start p-5">
            <div className="PriceTag">
                <s className="OriginalHrp">50$/hr</s>
                <span className="text-2xl font-serif font-bold text-teal-500">30$/hr</span>
            </div>
            <div className="servicesInBasic">
                <p className="text-sm md:text-lg text-gray-500 font-extrabold"><strong>What is included?</strong></p>
                <ul className="list-decimal list-outside">
                    {BasicServ.map((link: BasicServLink) => {
                        return (
                            <li className="listText">{link.title}</li>
                        )
                    })}
                </ul>
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
            <Button className="NavButton mt-2" onClick={handleclick}>Get Started</Button>
        </div>
    </div>
  )
}

export default Basic