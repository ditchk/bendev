import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations";
import ServicesBox from "./ServicesBox";
import ServiceLoader from "./ServiceLoader";
import { Models } from "appwrite";
import { ImArrowDown } from "react-icons/im";

const Services = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text_title2">Hire my expertise today!</h1>
        <div className="bg-slate-100 w-[1.5px] h-11 rounded-t-full" />
        <h1 className="text_title2">Get more than just a landing page</h1>
        <div className="bg-slate-100 w-[1.5px] h-11 rounded-t-full" />
        <ImArrowDown  className="text-3xl text-slate-50" />
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
