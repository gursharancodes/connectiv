import { Link, NavLink } from "react-router-dom";
import { siteIdentity, navLinks, ourServices, socialLinks } from "../index";

const Footer = () => {
  return (
    <footer className="bg-[#050507] text-[#f7f7ff] px-6 md:px-10 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Section 1: Brand (wider, spans 2 cols on large screens) */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
              src={siteIdentity.logo}
              alt={siteIdentity.name + " logo"}
              className="h-7 md:h-8"
            />
            <h1 className="text-xl font-semibold tracking-tight">
              {siteIdentity.name}
            </h1>
          </Link>
          <p className="text-sm text-gray-300 mb-3 leading-relaxed pr-20">
            {siteIdentity.shortAbout}
          </p>
          <Link
            to="/about"
            className="text-sm font-medium underline hover:text-gray-400 transition-colors"
          >
            Learn more →
          </Link>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-gray-400 ${
                      isActive ? "text-[#36b8f7]" : "text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-gray-400 ${
                  isActive ? "text-[#36b8f7]" : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>

        {/* Section 3: Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {ourServices.services.map((service, index) => (
              <li key={index}>
                <Link
                  to={`/services/${service.id}`}
                  className="hover:text-gray-400"
                >
                  {service.title}
                </Link>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Social + Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <div className="flex gap-4 mb-5">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <img src={link.icon} className="h-6" alt={link.name} />
              </Link>
            ))}
          </div>
          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-[#f7f7ff] to-[#f7f7ff] text-[#00083b] font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} {siteIdentity.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
