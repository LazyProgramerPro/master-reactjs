import { useQuery } from "react";

const fetchUser = async () => {
  const res = await fetch("www.blablabla.com");
  return res.json();
};

const useUser = () => {
  return useQuery("user", fetchUser);
};

export default useUser;
