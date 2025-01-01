interface Props {
  msg: string;
}

//1️⃣  React.FC with props
const ComponentOne: React.FC<Props> = ({ msg }) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

//2️⃣ Destructuring props with inline typing
const ComponentTwo = ({ msg }: Props) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

//3️⃣ Typing props directly on props object
const ComponentThree = (props: { msg: string }) => {
  return (
    <div>
      <p>{props.msg}</p>
    </div>
  );
};
