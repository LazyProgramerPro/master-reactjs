import { useEffect, useMemo, useState } from "react";

const Payout = () => {
  const [products, setProducts] = useState([]);

  const total = useMemo(
    () =>
      products.reduce((acc, currentValue) => {
        return acc + currentValue.price;
      }, 0),
    [products]
  );

  //...
};
