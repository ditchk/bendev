import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations";
import ServicesBox from "./ServicesBox";
import ServiceLoader from "./ServiceLoader";
import { Models } from "appwrite";

const Services = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  return (
    <div className="flex flex-1 justify-center items-center">
      {isLoading && !products ? (
        <ServiceLoader />
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
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
