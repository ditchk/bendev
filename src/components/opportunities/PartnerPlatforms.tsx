import { SiBlockchaindotcom } from 'react-icons/si'
import { TbBrandNexo } from 'react-icons/tb'

const PartnerPlatforms = () => {
  return (
    <div className='flex flex-1 justify-center items-center h-fit w-full p-5'>
      <div className="flex flex-row justify-center items-center w-fit h-fit gap-5">
            <TbBrandNexo className=" text-blue-800 text-5xl" />
            <SiBlockchaindotcom  className=" text-blue-800 text-4xl"/>
      </div>
      
    </div>
  )
}

export default PartnerPlatforms
