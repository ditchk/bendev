import { SiBinance, SiBlockchaindotcom } from 'react-icons/si'
import { TbBrandNexo } from 'react-icons/tb'

const PartnerPlatforms = () => {
  return (
    <section className='OpSections'>
      <div className='flex flex-col justify-center items-center gap-5 h-fit w-full'>
          <h1 className="textHeadline">Popular Trading/Investment platforms</h1>
          <div className="flex flex-row justify-start md:justify-center items-center w-full h-full gap-5 p-10 overflow-x-scroll custom-scrollbar">
            <h3 className="box-border flex flex-row justify-center gap-2 items-center text-white px-10 bg-gradient-to-bl duration-1000 from-fuchsia-400 via-teal-600 to-black p-1 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-fuchsia-500">Nexo<TbBrandNexo className=" text-blue-800 text-4xl" /></h3>
            <h3 className="box-border flex flex-row justify-center gap-2 items-center text-white px-10 bg-gradient-to-bl duration-1000 from-fuchsia-400 via-teal-600 to-black p-1 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-fuchsia-500">Blockchain<SiBlockchaindotcom className=" text-blue-800 text-4xl" /></h3>
            <h3 className="box-border flex flex-row justify-center gap-2 items-center text-white px-10 bg-gradient-to-bl duration-1000 from-fuchsia-400 via-teal-600 to-black p-1 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-fuchsia-500">Binance<SiBinance className="text-yellow-800 text-4xl" /></h3>
            <h3 className="box-border flex flex-row justify-center gap-2 items-center text-white px-10 bg-gradient-to-bl duration-1000 from-fuchsia-400 via-teal-600 to-black p-1 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-fuchsia-500">Fbs <img src="/assets/images/fbs.svg" alt="" width={35} className="" /></h3>
            <h3 className="box-border flex flex-row justify-center gap-2 items-center text-white px-10 bg-gradient-to-bl duration-1000 from-fuchsia-400 via-teal-600 to-black p-1 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-fuchsia-500">Xm global <img src="/assets/images/xmglobal.png" alt="" width={35} className="" /></h3>
          </div>
      </div>
    </section>
    
  )
}

export default PartnerPlatforms
