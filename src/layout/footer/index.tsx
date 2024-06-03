import s from "./_s.module.scss";
import { Link } from "react-router-dom";
//@ts-ignore
import Logo from "@a/icons/logo.svg?react";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_t}>
        <ul className={s.footer_t_list}>
          <li className={s.footer_t_listItem}>
            <h3>SUPPORT</h3>
            <div>
              <a href="tel:+20 106 0091742" target="_blank">
                +201060091742
              </a>

              <a href="mailto:showroom@maisonpyramide.com" target="_blank">
                showroom@maisonpyramide.com
              </a>
            </div>
          </li>
          <li className={s.footer_t_listItem}>
            <h3>ABOUT US</h3>
            <div>
              <Link to="/#maison-pyramide">Who we are</Link>
              <Link to="/#showroom">The Showroom</Link>
            </div>
          </li>
          <li className={s.footer_t_listItem}>
            <h3>FOLLOW US</h3>
            <div>
              <a
                href="https://www.instagram.com/maisonpyramideshowroom/"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/maison-pyramide/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </li>
          <li className={s.footer_t_listItem}>
            <h3>SUBSCRIBE</h3>
            <div>
              <form
                className={s.footer_form}
                action="https://maisonpyramide.us15.list-manage.com/subscribe/post?u=c63c326f60b5a465903f3bf0c&amp;id=f4792e5b8d"
                method="post"
                target="_blank"
                noValidate
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={s.footer_input}
                />
              </form>
            </div>
          </li>
        </ul>
      </div>
      <div className={s.footer_b}>
        <div>
          <a
            href="https://res.cloudinary.com/ddignhrdf/image/upload/f_auto,q_auto/v1592147262/showroom%20manager/Terms_of_Use_12-06-2020.pdf"
            target="_blank"
          >
            Terms & Conditions
          </a>
          <a
            href="https://res.cloudinary.com/ddignhrdf/image/upload/f_auto,q_auto/v1592147262/showroom%20manager/Privacy_Policy_12-06-2020.pdf"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>

        <a href="https://www.maisonpyramide.com/" target="_blank">
          <Logo className={s.logo} />
        </a>

        <div className={s.copyrights}>
          <p>All Rights Reserved - 2024</p>
          <p>Maison Pyramide</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
