import { useEffect, useMemo, useState } from "react";

const AComponent = () => {
  const [attempts, setAttempts] = useState(0);
  const user = useMemo(() => {
    return { name: "codelicks", loginAttempts: 3 };
  }, []);

  useEffect(() => {
    setAttempts((currentAttempts) => currentAttempts + user.loginAttempts);
  }, [user]);

  return <h3>Login attempts: {attempts}</h3>;
};

export default AComponent;
