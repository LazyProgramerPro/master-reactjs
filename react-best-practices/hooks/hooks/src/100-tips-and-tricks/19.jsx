import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchUser } from "./api.js";

const DisplayUser = ({ userId }) => {
  const { data } = useQuery(["user", userId], fetchUser);

  // rest of the component...
};

export default DisplayUser;
