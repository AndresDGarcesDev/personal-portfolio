import { Outlet } from "react-router-dom";
import Navbar from "./Nabvar";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { ScrollToTopButton } from "../../components/ui/button/ButtonScrollToTop";

export default function MainLayout() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Copyright />
      <ScrollToTopButton />
    </div>
  );
}
