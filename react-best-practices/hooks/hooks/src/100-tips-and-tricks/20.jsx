import { useEffect, useState } from "react";

const DisplayUser = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const abortContoller = new AbortController();
    const fetchUserData = async () => {
      const newData = await fetch(`/api/user/${user.id}`, {
        signal: abortContoller.signal,
      });
      setUserData(newData);
    };

    fetchUserData();

    return () => {
      abortContoller.abort();
    };
  }, [user.id]);

  if (!userData) {
    return null;
  }

  return <h1>{userData.name}</h1>;
};

export default DisplayUser;
