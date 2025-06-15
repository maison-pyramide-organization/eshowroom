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
        <li className={category == "womenswear" ? "active" : ""}>
          <Link to="/brands?category=womenswear">WOMENSWEAR</Link>
        </li>
        <li className={category == "menswear" ? "active" : ""}>
          <Link to="/brands?category=menswear">MENSWEAR</Link>
        </li>
        <li className={category == "accessories" ? "active" : ""}>
          <Link to="/brands?category=accessories">ACCESSORIES</Link>
        </li>
      </ul>
    </nav>
  );
};
