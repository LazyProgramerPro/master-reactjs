// ✅ Partial type helper
// 1️⃣ API request/response
// 2️⃣ Styled Components
// 3️⃣ Forms

export type ButtonProps = {
  color: string;
  font: string;
  onClick: () => void;
};

const Button: ButtonProps = {
  color: "blue",
  font: "blabla",
  onClick: () => console.log("hello"),
};

const Close: Partial<ButtonProps> = {};
