import { Outlet } from "react-router-dom";
import Footer from "../compnents/shared/Footer/Footer";
import NavBar from "../compnents/shared/NavBar/NavBar";
const Main = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="min-h-[calc(100vh-380px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
