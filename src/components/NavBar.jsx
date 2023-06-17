import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/navbar.css";

function NavBar() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const location = useLocation();

  return (
    <section id="nav-bar">
      <ul className="buttons-whole">
        <li>
          <Link to="/">
            <button
              className={`buttons ${location.pathname === "/" ? "active" : ""}`}
            >
              1
            </button>
          </Link>
        </li>

        <li>
          <Link to="/select-plan">
            <button
              className={`buttons ${
                location.pathname === "/select-plan" ? "active" : ""
              }`}
            >
              2
            </button>
          </Link>
        </li>
        <li>
          <Link to="/addons">
            <button
              className={`buttons ${
                location.pathname === "/addons" ? "active" : ""
              }`}
            >
              3
            </button>
          </Link>
        </li>
        <li>
          <Link to="/finishing-up">
            <button
              className={`buttons ${
                location.pathname === "/finishing-up" ? "active" : ""
              }`}
            >
              4
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default NavBar;
