const users = [
  { id: 1, name: "codelicks" },
  { id: 2, name: "dude" },
  { id: 3, name: "john" },
];

const Parent = () => {
  return <DisplayUsers users={[]} />;
};

const DisplayUsers = ({ users }) => {
  //          if 👇 equals 0, react will render 0 instead of null
  return (
    <div>{users.length > 0 && users.map((user) => <h3>{user.name}</h3>)}</div>
  );
};

export default Parent;
