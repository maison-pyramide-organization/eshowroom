import s from "./_s.module.scss";

interface Iprops {
  pick: any;
}
export const Pick = (props: Iprops) => {
  const { pick } = props;
  const { brandName, productName, productImage, brandDescription } = pick;
  return (
    <div className={s.pick}>
      <img src={productImage} alt={productName} />
      <h3 className={s.pick_brand}>{brandName}</h3>
      <h4 className={s.pick_name}>{productName}</h4>
      <p className={s.pick_description}>{brandDescription}</p>
      <a href="https://jooraccess.com/sign_in" target="_blank">
        EXPLORE BRAND ON JOOR
      </a>
    </div>
  );
};
