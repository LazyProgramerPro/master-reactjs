import { useState } from "react";

const UserForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const fullname = firstname + " " + lastname;

  const firstnameHandler = (e) => {
    setFirstname(e.target.value);
  };

  const lastnameHandler = (e) => {
    setLastname(e.target.value);
  };

  return (
    <form>
      <input type="text" id="firstname" onChange={firstnameHandler} />
      <input type="text" id="lastname" onChange={lastnameHandler} />
      <br />
      <h1>fullname: {fullname}</h1>
    </form>
  );
};

export default UserForm;
