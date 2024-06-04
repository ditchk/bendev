import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations";
import ServicesBox from "./ServicesBox";
import ServiceLoader from "./ServiceLoader";
import { Models } from "appwrite";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const ServiceBox = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
      
    }, [isInView])
    
  return (
    <div 
      className="MainServiceBox" id="Choose a services"
      style={{
        transform: isInView ? "none" : "translateY(10px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.7, 0.55, 0.65, 1) 0.5s"
      }}
      ref={ref}
    >
      <h1 className="PackText font-bold mb-4">Choose a service</h1>
      {isLoading && !products ? (
        <ServiceLoader />
      ) : (
        <div className="MainBox">
          <ul className="Box-listify">
          {products?.documents.map((service: Models.Document) => (
            <li>
              <ServicesBox service={service} key={service.productTitle} />
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  )
}

export default ServiceBox
