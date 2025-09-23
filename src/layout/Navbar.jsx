import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteIdentity, navLinks } from "../index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLink = "font-medium transition-colors duration-200 mb-2 md:mb-0";

  return (
    <header>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-5 fixed top-0 left-0 right-0 z-50 bg-[#050507]/80 backdrop-blur-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={siteIdentity.icon}
            alt={siteIdentity.name + " icon"}
            className="h-7 md:h-8"
          />
          <h1 className="text-xl font-semibold text-[#f7f7ff]">
            {siteIdentity.name}
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "text-[#36b8f7]"
                    : "text-[#f7f7ff] hover:text-[#36b8f7]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-md bg-[#f7f7ff] text-[#00083b] font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </NavLink>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[10001]"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} color="#f7f7ff" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#050507]/75 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 text-xl z-[10000]">
          {/* Close Button inside overlay */}
          <div className="flex items-center justify-between w-full px-4 absolute top-5">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2"
            >
              <img
                src={siteIdentity.icon}
                alt={siteIdentity.name + " icon"}
                className="h-7 md:h-8"
              />
              <h1 className="text-xl font-semibold text-[#f7f7ff]">
                {siteIdentity.name}
              </h1>
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={24} color="#f7f7ff" />
            </button>
          </div>

          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLink} text-2xl ${
                  isActive
                    ? "text-[#36b8f7]"
                    : "text-[#f7f7ff] hover:text-[#36b8f7]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 rounded-lg bg-[#f7f7ff] text-[#00083b] font-semibold hover:opacity-90"
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
