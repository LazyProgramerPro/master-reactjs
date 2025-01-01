import { useEffect, useState } from "react";

const Products = () => {
  const [status, setStatus] = useState("idle");

  const fetchProducts = async () => {
    try {
      setStatus("pending");
      fetch(/*fetch products from server*/);
      setStatus("successful");
    } catch (error) {
      setStatus("rejected");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (status === "pending" || status === "idle") {
    return <p>Loading products...</p>;
  }

  if (status === "rejected") {
    return <p>Oh nooo!</p>;
  }

  return <>products are ready, display here ...</>;
};

export default Products;
