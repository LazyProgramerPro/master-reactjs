import { useState } from "react";

const AComponent = () => {
  const [user, setUser] = useState({ id: "", name: "" });

  const nameChangeHandler = (e) => {
    setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
  };
  const userName = user.name;
  console.log(userName);
  return <input onChange={nameChangeHandler} />;
};

export default AComponent;
