export type User = {
  id: string;
  name: string;
  age: number;
};

type Getters<T> = {
  [Key in keyof T as `get${Capitalize<string & Key>}`]: () => T[Key];
};

type getUser = Getters<User>;

// type getUser = {
//   getId: () => string
//   getName: () => string
//   getAge: () => number
// }
