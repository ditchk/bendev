import { useGetAllServices } from "@/lib/Queries/QueriesAndMutations";
import ServicesBox from "./ServicesBox";
import ServiceLoader from "./ServiceLoader";
import { Models } from "appwrite";

const ServiceBox = () => {

  const { data: products, isPending: isLoading } = useGetAllServices();

  return (
    <div className="MainServiceBox" id="Choose a services">
      <h1 className="PackText font-bold mb-4">Choose a service</h1>
      {isLoading && !products ? (
        <ServiceLoader />
        ) : (
          <div className="Box-listify">
            {products?.documents.map((service: Models.Document) => (
              <div key={service.$id} className="ServiceList">
                <ServicesBox service={service} key={service.productTitle} />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default ServiceBox
