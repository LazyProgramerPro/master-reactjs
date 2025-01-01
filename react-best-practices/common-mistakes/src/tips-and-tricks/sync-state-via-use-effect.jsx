import { useEffect, useState } from "react";

const Form = () => {
  const [age, setAge] = useState(0);
  const [isValidAge, setIsValidAge] = useState(false);

  const changeHandler = (e) => {
    const val = e.target.value;
    setAge(val);
    if (val >= 20) {
      setIsValidAge(true);
    } else {
      setIsValidAge(false);
    }
  };

  return (
    <form>
      <label htmlFor="input">Enter your age:</label>
      <input type="number" id="input" value={age} onChange={changeHandler} />
      {!isValidAge && <span> ⛔ You need to be older.</span>}
    </form>
  );
};

export default Form;
