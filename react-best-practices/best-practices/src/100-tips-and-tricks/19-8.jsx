const AComponent = ({ id }) => {
  const users = {
    ids: ["1", "2", "3"],
    entities: {
      1: { id: 1, name: "Jack" },
      2: { id: 2, name: "Tom" },
      3: { id: 3, name: "Jerry" },
      4: { id: 4, name: "Superman" },
    },
  };

  //O(1)
  const getUserById = (id) => {
    return users?.entities[id];
  };

  const user = getUserById(id);

  return <DisplayUser user={user} />;
};

const DisplayUser = ({ user }) => {
  //...
};

export default AComponent;
