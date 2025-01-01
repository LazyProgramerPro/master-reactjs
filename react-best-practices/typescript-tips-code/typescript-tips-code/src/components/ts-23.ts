// Required<Type>

type Form = {
  username: string;
  password: string;
  captcha: string;
  opt?: string;
};

type AllFieldsForm = Required<Form>;

//😋 Use-cases of Required
//1️⃣ Validating input data, making sure all necessary fields are provided
//2️⃣ Enforcing strict type adherence in function parameters or return types
//3️⃣ Enhancing type safety in complex apps, especially when interacting with external APIs or services
