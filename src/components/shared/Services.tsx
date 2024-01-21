import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations";
import ServicesBox from "./ServicesBox";
import ServiceLoader from "./ServiceLoader";
import { Models } from "appwrite";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "../ui/button";

const Services = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
      
    }, [isInView])
  return (
    <div className="MainServiceBox">
      <div className="primary-Box"
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        ref={ref}
      >
        <h1 className="text_title2 shadow-sm shadow-cyan-600">Hire my expertise today!</h1>
        <div className="Styling-Div" />
        <h1 className="text_title2 shadow-sm shadow-cyan-600">Get more than just a landing page</h1>
        <div className="Line-Down" />
        <h1 className="text_title2 shadow-sm shadow-cyan-600">Revamp your online presence with bswp</h1>
      </div>
      <div className="flex justify-center w-full h-full mt-24">

        <Button className="custom-button">Choose a service to Get started today!</Button>
      </div>
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

export default Services
