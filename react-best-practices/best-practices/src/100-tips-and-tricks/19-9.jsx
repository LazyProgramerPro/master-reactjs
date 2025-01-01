const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="email" />
      <input type="password" name="password" />

      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
