import { cardio } from 'ldrs'

cardio.register()

const ProductLoader = () => {
  return (
    <div>
        <l-cardio
        size="50"
        stroke="2"
        speed="2" 
        color="black" 
        ></l-cardio>
    </div>
  )
}

export default ProductLoader
