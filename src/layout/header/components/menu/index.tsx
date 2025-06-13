import { Link } from "react-router-dom";
import s from "./_s.module.scss";

const Menu = () => {
  return (
    <div className={s.menu}>
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        {/* <li>
          <Link to="/brands?category=womenswear">WOMENSWEAR</Link>
        </li>
        <li>
          <Link to="/brands?category=accessories">ACCESSORIES</Link>
        </li> */}
        <li>
          <Link to="/brands">BRANDS</Link>
        </li>
        <li>
          <Link to={"/edits"}>EDITS</Link>
        </li>
        <li>
          <a target="_blank" href="https://jooraccess.com/sign_in">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
