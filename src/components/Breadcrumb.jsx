import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

// Utility to turn "content-creation" into "Content Creation"
const formatSlug = (text) => {
  return text
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const Breadcrumb = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Example: /services/content-creation
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav style={{ marginBottom: "1rem" }} className="opacity-70">
      <span>
        <Link to="/">Home</Link> /{" "}
      </span>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={to}>{formatSlug(value)}</span>
        ) : (
          <span key={to}>
            <Link to={to}>{formatSlug(value)}</Link> /{" "}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
