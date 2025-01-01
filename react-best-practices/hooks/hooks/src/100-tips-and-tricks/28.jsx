import { useEffect } from "react";

const AComponent = ({ userId }) => {
  useEffect(function fetchUserData() {}, [userId]);

  return <div>{/* display user info */}</div>;
};

export default AComponent;
