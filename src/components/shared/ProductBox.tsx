import { Models } from 'appwrite'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'


type ProductCardProps = {
    product: Models.Document
}

const ProductBox = ({ product } : ProductCardProps) => {


  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
  
    }, [isInView])

  return (
    <motion.section 
    style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.2s cubic-bezier(0.1, 0.1, 0.1, 1) 0.3s"
    }}
    ref={ref}
      className="flex flex-col justify-center items-center my-5">
      <div className="flex flex-1 justify-start md:justify-center items-start md:items-center h-fit  p-5 rounded-t-xl">
        <div className="experience-container">
          <div className="flex flex-col justify-end w-full h-full p-5">
            <img src={product.imageUrl} loading='lazy' alt="webdesigner" width={500} className="rounded-bl-2xl rounded-tr-2xl"/>
          </div>
          <div className="md:flex hidden bg-slate-500 w-1 md:min-h-[500px] lg:min-h-[600px] mx-3"/>
          <div className="flex flex-col justify-start items-start w-full h-full md:p-5 p-3 outline outline-1 outline-slate-100 bg-cyan-950 bg-opacity-10 rounded-tr-3xl rounded-bl-3xl md:rounded-e-full">
            <h2 className="text-lg md:text-2xl w-3/4 font-bold text-white text-start md:text-cyan-950 my-2">{product.productTitle}</h2>
            <p className="w-full md:w-full lg:w-full text-slate-700 mb-5">
              {product.ProductDescription}
            </p>
            <Button className="custom_button mb-5">
              purchase this service
            </Button>
            <Link to="/cv.pdf" className="Linkme3" target="_black">Download CV</Link>
          </div>
        </div>
    </div>
  </motion.section>
  )
}

export default ProductBox
