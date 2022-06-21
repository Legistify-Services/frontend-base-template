// ** React Imports
import { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// ** Icons Imports
import { Disc, X, Circle } from "react-feather";

// ** Config
import themeConfig from "@configs/themeConfig";

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "@utils";

const VerticalMenuHeader = (props) => {
  // ** Props
  const {
    menuCollapsed,
    setMenuCollapsed,
    setMenuVisibility,
    setGroupOpen,
    menuHover,
  } = props;

  // ** Vars
  const user = getUserData();

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [logo, setLogo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // // ** Reset open group
  // useEffect(() => {
  //   if (!menuHover && menuCollapsed) setGroupOpen([]);
  // }, [menuHover, menuCollapsed]);

  // ** Reset open group  by default opening the sidebar group
  useEffect(() => {
    if (windowSize > 1200) {
      setLogo(true);
      if (menuHover && menuCollapsed) {
        setGroupOpen(["contracts"]);
        setLogo(false);
      } else {
        setGroupOpen([]);
        setLogo(true);
      }
    } else {
      setLogo(false);
    }
  }, [menuHover, menuCollapsed, windowSize]);

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(true)}
        />
      );
    } else {
      return (
        <Circle
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(false)}
        />
      );
    }
  };

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item me-auto">
          <NavLink
            to={user ? getHomeRouteForLoggedInUser(user.role) : "/"}
            className="navbar-brand"
          >
            {logo ? (
              <span className="brand-logo">
                <img src={themeConfig.app.appLogoImage} alt="logo" />
              </span>
            ) : (
              <span>
                <img src={themeConfig.app.appFullLogoImage} alt="full_logo" />
              </span>
            )}
            {/* <h2 className="brand-text mb-0">
              {themeConfig.app.appFullLogoImage}
            </h2> */}
          </NavLink>
        </li>
        {/* <li className='nav-item nav-toggle'>
          <div className='nav-link modern-nav-toggle cursor-pointer'>
            <Toggler />
            <X onClick={() => setMenuVisibility(false)} className='toggle-icon icon-x d-block d-xl-none' size={20} />
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default VerticalMenuHeader;
