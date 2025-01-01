import { cache } from "react";

const getUsers = cache(async () => {
  return await fetch("api/users");
});

async function DisplayUsers() {
  const users = await getUsers();
  // ...
}

async function ModifyUsers() {
  const users = await getUsers();
  // ...
}
