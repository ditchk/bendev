import PartnerPlatforms from "@/components/opportunities/PartnerPlatforms"
import ReadHowTo from "@/components/opportunities/ReadHowTo"
import WelcomeBox from "@/components/opportunities/WelcomeBox"

const Opportunities = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-5 h-full w-full">
        <WelcomeBox src={'/assets/videos/analysis.mp4'} />
        <PartnerPlatforms />
        <ReadHowTo />
    </div>
  )
}

export default Opportunities
