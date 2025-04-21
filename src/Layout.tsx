import { Outlet } from "react-router-dom";
import Header from "./Components.tsx/Header";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
