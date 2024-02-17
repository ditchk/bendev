import { SiAngular, SiFigma, SiReact, SiWebflow, SiWordpress } from "react-icons/si"

const Cards = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-1 overflow-x-scroll custom-scrollbar p-5">
      <h1 className="H1Crads"><SiWordpress className="text-xl md:text-2xl text-blue-600"/>Wordpress </h1>
      <h1 className="H1Crads"><SiFigma className="text-xl md:text-2xl text-red-600"/>Figma  </h1>
      <h1 className="H1Crads"><SiWebflow className="text-xl md:text-2xl text-white"/>Webflow </h1>
      <h1 className="H1Crads"><SiReact className="text-xl md:text-2xl text-cyan-600 animate-spin"/>React </h1>
      <h1 className="H1Crads"><SiAngular className="text-xl md:text-2xl text-red-900"/>Angular </h1>
    </div>
  )
}

export default Cards
