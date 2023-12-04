import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { useSelector } from "react-redux";
import Spiner from "../Component/Spiner";

function MainLayout() {
  const loading = useSelector((e) => e.statemain.loading);
  return (
    <div className="">
      {loading && <Spiner />}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
