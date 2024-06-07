import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {

  return (
    <div className="serviceBox">
        
        <div
            className="ServiceContainer">
        <div className="Image-Cont">
            <img src={service.imageUrl} alt={"project Management"} width={450} className="ImageUrl-sty"/>
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
            <Link to={''} className="ServLink bg-teal-800 text-white">
                <small className="animate-pulse">Starting at 200$</small>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default ServicesBox
