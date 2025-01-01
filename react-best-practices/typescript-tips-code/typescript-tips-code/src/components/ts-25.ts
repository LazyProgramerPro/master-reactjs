const adminUsers = {
  dbAdmin: "John",
  contentAdmin: "Alex",
  superAdmin: "Spiderman",
  productsAdmin: "Batman",
} as const;

type AllAdmins = (typeof adminUsers)[keyof typeof adminUsers];
