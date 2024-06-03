import { Link, useParams } from "react-router-dom";
import s from "./_s.module.scss";
import getEdit from "./utils/getEdit.js";
import { EditCard } from "@/components/edit-card";
import { Pick } from "./components/pick/index.js";
import recommendedEdits from "@/data/recommendedEdits.js";

const Edit = () => {
  const { slug } = useParams();
  const edit = getEdit(slug);
  if (!edit) return null;
  const { author, title, cover, description, quote, picks } = edit;

  return (
    <main>
      <section className={s.editSection}>
        <div className={s.edit_image_w}>
          <img className={s.edit_image} src={cover} />
        </div>

        <div className={s.edit_w}>
          <h1 className={s.edit_author}>EDIT BY {author}</h1>
          <h3 className={s.edit_title}>{title}</h3>
          <p className={s.edit_quote}>
            "{quote}" - {author}
          </p>
          <p className={s.edit_description}>{description}</p>
        </div>
      </section>
      <section className={s.picksSection}>
        <h2 className={s.picks_title}>CURATED PICKS</h2>
        <ul className={s.grid}>
          {picks.map((pick) => (
            <li key={pick.id} className={s.grid_item}>
              <Pick pick={pick} />
            </li>
          ))}
        </ul>
      </section>
      <section className={s.recSection}>
        <h2 className={s.rec_title}>YOU MAY ALSO LIKE</h2>
        <ul className={s.grid}>
          {recommendedEdits.map((edit) => (
            <li className={s.grid_item} key={edit.id}>
              <EditCard edit={edit} />
            </li>
          ))}
        </ul>

        <Link to="/edits" className={s.rec_link}>
          EXPLORE ALL EDITS
        </Link>
      </section>
    </main>
  );
};

export default Edit;
