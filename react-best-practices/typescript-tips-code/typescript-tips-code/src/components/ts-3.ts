type User = {
  id: string;
  name: string;
  age: number;
};

type UserKeys = keyof User; // "id" | "name" | "age"
