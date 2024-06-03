import s from "./_s.module.scss";
import { Link } from "react-router-dom";

interface Iprops {
  edit: any;
}
export const EditCard = (props: Iprops) => {
  const { slug, cover, videoCover, title, subtitle } = props.edit;

  return (
    <Link to={`/edits/${slug}`} className={s.edit}>
      {cover ? (
        <img className={s.edit_media} src={cover} alt={title} />
      ) : (
        <video
          muted
          loop
          autoPlay
          playsInline
          className={s.edit_media}
          src={videoCover}
        />
      )}
      <div className={s.edit_info}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};
