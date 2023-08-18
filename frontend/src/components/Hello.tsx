import React, { useEffect } from "react";
import {useGetProductsQuery,GetProductsQuery,useGetProductByIdQuery  } from "../graphql/generated/schema";

export const Hello = () => {
  const { error, loading, data } = useGetProductsQuery();
  const { error: error2, loading: loading2, data: data2 } = useGetProductByIdQuery({
    variables: {
    id: "1a3f0711-0a5d-41be-abab-8ca5265afa34"}
    });
  

  const [products, setProducts] = React.useState<GetProductsQuery["products"] | null>([]);

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
    console.log(data2);
    
  }, [data,data2]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product?.id}>
              {product?.name} - {product?.size_per_unit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
