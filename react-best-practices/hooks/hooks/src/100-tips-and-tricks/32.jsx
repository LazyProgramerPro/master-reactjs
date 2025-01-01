import { useReducer, useState } from "react";

const shippingReducer = (state, action) => {
  let rate = 50;
  if (action.type === "calc_shipping_rate") {
    if (action.country === "United Kingdom") {
      rate = 20;
    } else if (action.country === "Italy") {
      rate = 30;
    }
    return { ...state, rate };
  }
  throw Error("Action not found.");
};

const Shipping = () => {
  const [state, dispatch] = useReducer(shippingReducer, { rate: 50 });

  const calcRate = (country) => {
    dispatch({ type: "calc_shipping_rate", country });
  };

  return (
    <>
      <select onChange={(e) => calcRate(e.target.value)}>
        <option>Select</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Italy">Italy</option>
      </select>
      <h3>Shipping rate: {state.rate}</h3>
    </>
  );
};

export default Shipping;
