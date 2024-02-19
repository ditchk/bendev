import { SiAngular, SiFigma, SiFramer, SiReact, SiShopify, SiSquarespace, SiWebflow, SiWix, SiWordpress } from "react-icons/si"

const Cards = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-1 overflow-x-scroll custom-scrollbar p-5"
    >
      <h1 className="H1Crads"><SiWordpress className="text-xl md:text-2xl text-blue-600"/>Wordpress </h1>
      <h1 className="H1Crads"><SiReact className="text-xl md:text-2xl text-cyan-600"/>React </h1>
      <h1 className="H1Crads"><SiAngular className="text-xl md:text-2xl text-red-900"/>Angular</h1>
      <h1 className="H1Crads"><SiFigma className="text-xl md:text-2xl text-red-600"/>Figma  </h1>
      <h1 className="H1Crads"><SiWebflow className="text-xl md:text-2xl text-white"/>Webflow </h1>
      <h1 className="H1Crads"><SiShopify className="text-xl md:text-2xl text-teal-200"/>Shopify</h1>
      <h1 className="H1Crads"><SiFramer className="text-xl md:text-2xl text-white"/>Framer</h1>
      <h1 className="H1Crads"><SiSquarespace className="text-xl md:text-2xl text-white"/>Squarespace </h1>
      <h1 className="H1Crads"><SiWix className="text-xl md:text-2xl text-black rounded-md bg-white"/>Wix </h1>
    </div>
  )
}

export default Cards
