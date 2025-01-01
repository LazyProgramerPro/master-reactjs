import { useEffect, useState } from "react";
import { productsApi } from "api.js";

const useProduct = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      //const res = await fetch(`www.blablabla.com/products/${productId}`);
      const res = await productsApi.getProductById(productId);
      setProduct(res.json());
    };

    fetchProduct();
  });

  return { product };
};

const ProductPage = ({ productId }) => {
  const { product } = useProduct({ productId });
  const submitHandler = () => {
    //submit logic...
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>

      <button onClick={submitHandler}>Add to cart</button>
    </div>
  );
};

export default ProductPage;
