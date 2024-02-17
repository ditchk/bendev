import { SiAngular, SiFigma, SiFramer, SiReact, SiShopify, SiSquarespace, SiWebflow, SiWix, SiWordpress } from "react-icons/si"

const Cards = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-1 overflow-x-scroll custom-scrollbar p-5"
    >
      <h1 className="H1Crads"><SiWordpress className="text-lg md:text-xl text-blue-600"/>Wordpress </h1>
      <h1 className="H1Crads"><SiReact className="text-lg md:text-xl text-cyan-600 animate-spin"/>React </h1>
      <h1 className="H1Crads"><SiAngular className="text-lg md:text-xl text-red-900"/>Angular</h1>
      <h1 className="H1Crads"><SiFigma className="text-lg md:text-xl text-red-600"/>Figma  </h1>
      <h1 className="H1Crads"><SiWebflow className="text-lg md:text-xl text-white"/>Webflow </h1>
      <h1 className="H1Crads"><SiShopify className="text-lg md:text-xl text-teal-200"/>Shopify</h1>
      <h1 className="H1Crads"><SiFramer className="text-lg md:text-xl text-white"/>Framer</h1>
      <h1 className="H1Crads"><SiSquarespace className="text-lg md:text-xl text-teal-300"/>Squarespace </h1>
      <h1 className="H1Crads"><SiWix className="text-lg md:text-xl text-black rounded-md bg-white"/>Wix </h1>
    </div>
  )
}

export default Cards
