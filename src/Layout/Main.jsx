import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>This is Nave</h2>
      <Outlet></Outlet>
      <h2>This is Footer</h2>
    </div>
  );
};

export default Main;
