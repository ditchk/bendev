import { SiBinance, SiBlockchaindotcom } from 'react-icons/si'
import { TbBrandNexo } from 'react-icons/tb'

const PartnerPlatforms = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-fit w-full p-5'>
      <h1>Popular Investment platforms</h1>
      <div className="flex flex-row justify-center items-center w-fit h-fit gap-5">
        <h3 className="box-border flex flex-row justify-center gap-2 items-center">Nexo<TbBrandNexo className=" text-blue-800 text-4xl" /></h3>
        <h3 className="box-border flex flex-row justify-center gap-2 items-center">Blockchain<SiBlockchaindotcom className=" text-blue-800 text-4xl" /></h3>
        <h3 className="box-border flex flex-row justify-center gap-2 items-center">Binance<SiBinance className="text-yellow-800 text-4xl" /></h3>
      </div>

    </div>
  )
}

export default PartnerPlatforms
