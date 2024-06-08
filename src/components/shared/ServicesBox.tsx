import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {

  return (
    <div className="ServiceContainer">
        <div className="Image-Cont">
            <img 
                src={service.imageUrl} 
                alt={"project Management"} 
                width={500} 
                className="ImageUrl-sty"
                loading="lazy"
            />
        </div>
        <div
            className="DescrIPTBox">
            <h1 className="BoxText">
                {service.productTitle}
            </h1>
            <Truncate text={service.ProductDescription} maxLength={200} />
        </div>
        
        <div className="Button-sect mt-10 mb-2">
            <Link reloadDocument to={'/packages/basic'} className="ServLink">
                <small>Request</small>
            </Link>
            <Link to={''} className="ServLink bg-teal-950 text-white">
                <small className="animate-pulse">Starting at 200$</small>
            </Link>
        </div>
    </div>
  )
}

export default ServicesBox
