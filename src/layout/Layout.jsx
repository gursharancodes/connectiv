import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      {/* Scroll resets on every route change */}
      <ScrollToTop />

      {/* Whatsapp chat */}
      <Link
        to="https://wa.me/1234567890?text=Hi Connectiv, I am intrested to chat."
        target="_blank"
        className="fixed bottom-7 right-7 md:right-10 w-12 md:w-14 z-[999]"
      >
        <img src="./social/Whatsapp-overlay.svg" alt="whatsapp" />
      </Link>

      <header>
        <Navbar />
      </header>
      <main className="mt-15 md:mt-25">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
