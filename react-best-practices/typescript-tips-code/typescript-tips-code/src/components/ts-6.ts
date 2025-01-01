export interface User {
  name: string;
  age: number;
}

type ID = string;

type DB = Record<string, User | ID>;

// ❌ each property's type will be User | ID
const someData = {
  john: "ID843759",
  alex: {
    name: "some name",
    age: 28,
  },
} satisfies DB;

someData.john.toLowerCase();
