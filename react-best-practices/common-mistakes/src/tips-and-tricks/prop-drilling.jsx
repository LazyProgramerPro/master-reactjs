import useUser from "./5-2";

const MainPage = () => {
  return (
    <main>
      <NavBar />
      <div>Dashboard</div>
    </main>
  );
};

const NavBar = () => {
  return (
    <aside>
      <Heading />
    </aside>
  );
};

const Heading = () => {
  return <DisplayUser />;
};

const DisplayUser = () => {
  const { user } = useUser();

  return <></>;
};
