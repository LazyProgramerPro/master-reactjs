import { useState } from "react";

const Form = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onProductClick = (product) => () => setSelectedProduct(product);

  return (
    <>
      <ul>
        {products.map((product) => {
          return <li onClick={onProductClick(product)}>{product.title}</li>;
        })}
      </ul>
      <h1>{selectedProduct.title}</h1>
    </>
  );
};

export default Form;
