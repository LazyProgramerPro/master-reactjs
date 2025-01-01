// Pick<Type, "keys" | "to" | "pick">

export type User = {
  id: string;
  name: string;
  age: number;
  email: string;
};

type UserId = Pick<User, "id" | "name">;
