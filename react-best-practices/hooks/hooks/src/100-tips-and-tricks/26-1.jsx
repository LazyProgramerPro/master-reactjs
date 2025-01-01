import { useEffect, useState } from "react";

const Test = ({ prop }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    //...
  });
  //☝️

  useEffect(() => {
    //...
  }, [value, prop]);
  //             ☝️

  useEffect(() => {
    //...
  }, []);
  //       ☝️
};
