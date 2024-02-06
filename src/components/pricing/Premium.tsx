import { BasicServ, PrimiumServ } from '@/constants'
import { BasicServLink, PrimiumServLink } from '@/types'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'

const Premium = () => {

  const Navigate = useNavigate()

  const handleclick = () => {
      Navigate('https://clients.bensworkspace.app')
  }


  return (
    <div className="BasicPackageBox2">
    <span className="PackageText">Premium package</span>
    <div className="flex flex-col justify-center items-center p-2">
        <div className="PriceTag">
            <s className="OriginalHrp">1000$/hr</s>
            <span className="text-3xl font-serif font-bold text-teal-500">800$/hr</span>
        </div>
        <div className="servicesInBasic">
            <p className="text-sm md:text-lg"><strong>Everything in basic package</strong></p>
            {PrimiumServ.map((link: PrimiumServLink) => {
                return (
                    <li className="listText">{link.title}</li>
                )
            })}
        </div>
        <div className="BoxAdsOn">
            <h1 className="adssOnTitle"><strong>Adds on</strong></h1>
                <ul className="AdsOnList">
                  <li>
                    Upto 6 month project extension
                  </li>
                    <li>
                        Unlimited teh support
                    </li>
                    <li>
                        No added fees
                    </li>
                    <li>
                        3 free revisions
                    </li>
                    <li>
                        4/hr extratime Availability when needed
                    </li>
                    <li>
                      Premium client dashboard to see project progress
                    </li>
                </ul>
        </div>
        <Button className="mt-2" onClick={handleclick}>Get Started</Button>
    </div>
</div>
  )
}

export default Premium