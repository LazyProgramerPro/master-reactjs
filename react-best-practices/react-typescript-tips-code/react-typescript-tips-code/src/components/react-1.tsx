type ChildProps = {
  person: {
    name: string;
    age: number;
  };
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

const Child = (props: DeepReadonly<ChildProps>) => {
  const handleNameChange = () => {
    // ❌ Incorrect: Mutating the props directly
    props.person = {
      name: "blabla",
      age: 34,
    };

    //✅ Correct: Create a new object and handle state updates in the parent component
    const newPerson = { ...props.person, name: "Jane Doe" };
    //pass the newPerson to the parent via a handler...
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.person.name}</p>
      <p>Age: {props.person.age}</p>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
};

export default Child;
