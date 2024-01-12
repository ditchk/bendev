import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations";
import ServicesBox from "./ServicesBox";
import ServiceLoader from "./ServiceLoader";
import { Models } from "appwrite";
import { ImArrowDown } from "react-icons/im";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Services = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
      
    }, [isInView])
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div className="flex flex-col justify-center items-center"
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        ref={ref}
      >
        <h1 className="text_title2 shadow-sm shadow-cyan-600">Hire my expertise today!</h1>
        <div className="bg-slate-100 w-[1.5px] h-11 rounded-t-full shadow-sm shadow-cyan-600" />
        <h1 className="text_title2 shadow-sm shadow-cyan-600">Get more than just a landing page</h1>
        <div className="bg-slate-100 w-[1.5px] h-11 rounded-t-full shadow-sm shadow-cyan-600" />
        <ImArrowDown  className="text-4xl text-cyan-600 filter mb-3 animate-bounce" />
      </div>
      {isLoading && !products ? (
        <ServiceLoader />
      ) : (
        <ul className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {products?.documents.map((service: Models.Document) => (
            <li>
              <ServicesBox service={service} key={service.productTitle} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Services
