import { useGetRecentProducts } from "@/lib/Queries/QueriesAndMutations"
import ProductLoader from "./ProductLoader";
import { Models } from "appwrite";
import ProductBox from "./ProductBox";

const Experience = () => {

  const { data: products, isPending: isProductsLoading } = useGetRecentProducts();

  return (
    <section 
      className="flex flex-col justify-center items-center my-10">
      <div className="flex felx-1 justify-start md:justify-center items-start md:items-center h-fit rounded-t-xl">
       {isProductsLoading && !products ? (
        <ProductLoader />
       ) : (
        <div className="flex flex-col justify-center items-center bg-cyan-950 bg-opacity-10 rounded-lg">
          <h1 className="text_title pt-10">DEDICATED SERVICE</h1>
          <ul className="product_cooursel">
          {products?.documents.map((product: Models.Document) => (
            <li>
              <ProductBox product={product} key={product.ProductDescription} />
            </li>
          ))}
        </ul>
        </div>
       )}
    </div>
  </section>
  )
}

export default Experience
