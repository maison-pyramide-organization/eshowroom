import s from "./_s.module.scss";
import Menu from "./components/menu";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// @ts-ignore
import CloseIcon from "@a/icons/close-icon.svg?react";
// @ts-ignore
import MenuIcon from "@a/icons/menu-icon.svg?react";
// @ts-ignore
import ESIcon from "@a/icons/logo.svg?react";

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpened, setMenuOpened] = useState(false);
  const handleIconClick = () => {
    setMenuOpened((prev) => !prev);
  };
  useEffect(() => {
    setMenuOpened(false);
  }, [pathname]);
  return (
    <header className={s.header}>
      <div className={s.header_w}>
        <nav>
          <Link to="/brands">brands</Link>
          <Link to="/edits">edits</Link>
        </nav>

        {/* LOGO */}
        <Link to="/" className={s.logo}>
        {menuOpened ? <ESIcon className={s.white}/> : <ESIcon/>}
        </Link>

        {/* NAV RIGHT */}
        <nav className={s.nav_r}>
          <a href="https://jooraccess.com/sign_in">login</a>
        </nav>

        {/* MENU ICON */}
        <div className={s.menuIcon} onClick={handleIconClick}>
          {menuOpened ? <CloseIcon className={s.closeIcon} /> : <MenuIcon />}
        </div>
      </div>

      {/* MENU */}
      {menuOpened && <Menu />}
    </header>
  );
};
export default Header;
