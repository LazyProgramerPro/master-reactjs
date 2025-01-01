// Omit<Type, “keys” | “to” | “omit”>

type Props = {
  id: string;
  cardNumber: number;
  name: string;
  age: number;
};

export type User = Omit<Props, "id" | "cardNumber">;
