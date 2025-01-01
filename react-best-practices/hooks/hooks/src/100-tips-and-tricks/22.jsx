import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("api/user/id");
      const json = await res.json();

      setUser(json);
    };

    fetchUser();
  }, []);

  return { user };
};

const MainPage = () => {
  const { user } = useUser();
  if (!user) {
    return <h1>Login first!</h1>;
  }

  return <h1>{user.fullname}</h1>;
};

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <>
      <h1>{user.fullname}</h1>
      <h2>{user.title}</h2>
    </>
  );
};
