import { Link } from "react-router-dom";
import s from "./s.module.scss";

interface Iprops {
  category: any;
}
export const Filter = (props: Iprops) => {
  const { category } = props;

  return (
    <nav className={s.filter}>
      <ul className={`${s["categories-list"]} hide-scrollbar`}>
        <li className={!category ? "active" : ""}>
          <Link to="/brands">ALL</Link>
        </li>
        <li className={category == "rtw" ? "active" : ""}>
          <Link to="/brands?category=rtw">RTW</Link>
        </li>
        <li className={category == "jwl" ? "active" : ""}>
          <Link to="/brands?category=jwl">JWL</Link>
        </li>
        <li className={category == "ftw-acc" ? "active" : ""}>
          <Link to="/brands?category=ftw-acc">FTW/ACC</Link>
        </li>
      </ul>
    </nav>
  );
};
