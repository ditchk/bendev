import { platformsInfo } from "@/constants"
import { PlatformType } from "@/types"

const BreakDown = () => {
  return (
    <section className="OpSections">
        <div className="BreakdownSec">
            <h1 className="textHeadline">
                Get an understanding of how each one of the platforms works.
            </h1>
            <div className="flexContainer">
                {platformsInfo.map(( link: PlatformType) => {
                  return (
                    <div>
                      <h1 className="textHeadline">{link.Title}</h1>
                      <div className="conentDiv">
                        <img src={link.image} alt="" width={700} className=" rounded-3xl shadow-2xl shadow-blue-500 hover:shadow-blue-900" />
                        <p>{link.Details}</p> 
                      </div>
                    </div>
                  )
                })}
            </div>
        </div>
    </section>
  )
}

export default BreakDown
