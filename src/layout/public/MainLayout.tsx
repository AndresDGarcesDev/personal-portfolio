import { Outlet } from "react-router-dom";
import Navbar from "./Nabvar";
import Footer from "./Footer";
import Copyright from "./Copyright";

export default function MainLayout() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}
