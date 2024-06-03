import s from "./_s.module.scss";
import { EditCard } from "@/components/edit-card";
import edits from "@/data/edits.js";

const Edits = () => {
  return (
    <>
      <div className={s.content}>
        <h1 className={s.title}>EXPLORE EDITS</h1>
        <main className={s.m}>
          <ul className={s.edits}>
            {edits.map((edit) => (
              <li className={s.edits_item} key={edit.title}>
                <EditCard edit={edit} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};
export default Edits;
