import { PrimiumServ } from '@/constants'
import { PrimiumServLink } from '@/types'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import { MdOutlineWorkspacePremium } from 'react-icons/md'

const Premium = () => {

  const Navigate = useNavigate()

  const handleclick = () => {
      Navigate('/packages/premium')
  }


  return (
    <div className="BasicPackageBox2">
        <MdOutlineWorkspacePremium className="text-4xl text-teal-500"  /> <h4 className="logo-text">Premium fixed</h4>
    <div className="flex flex-col justify-center items-start p-5">
        <div className="PriceTag">
            <s className="OriginalHrp">1000$</s>
            <span className="text-2xl font-serif font-bold text-teal-500">800$</span>
        </div>
        <div className="servicesInBasic">
            <p className="text-base md:text-lg font-extrabold font-sans text-slate-400">Everything in basic package</p>
                <ul className="list-disc font-bold">
                    {PrimiumServ.map((link: PrimiumServLink) => {
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
        <Button className="NavButton mt-2" onClick={handleclick}>Get Started</Button>
    </div>
</div>
  )
}

export default Premium