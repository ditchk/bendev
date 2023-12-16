import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations";
import ServicesBox from "./ServicesBox";
import ServiceLoader from "./ServiceLoader";
import { Models } from "appwrite";

const Services = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  return (
    <div className="hidden md:flex flex-1 justify-center items-center">
      {isLoading && !products ? (
        <ServiceLoader />
      ) : (
        <ul className="flex flex-1 justify-center items-center">
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
