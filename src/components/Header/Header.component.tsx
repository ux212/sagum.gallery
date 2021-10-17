// Import Libraries
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Import SVG
import back_arrow_icon from "assets/BackArrow.svg";
import burger_icon from "assets/Burger.svg";

// Import SCSS
import "./Header.component.scss";

export const Header: React.FC = () => {
  const [isMain, setMain] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setMain(true);
    } else {
      setMain(false);
    }
  }, [location.pathname]);

  return (
    <header>
      {isMain ? (
        <Link to="/about" className="header-icon">
          <img src={burger_icon} alt="burger icon" />
        </Link>
      ) : (
        <Link to="/" className="header-icon">
          <img src={back_arrow_icon} alt="back arrow icon" />
        </Link>
      )}
    </header>
  );
};
