import s from "./_s.module.scss";

const BrandCard = (props: any) => {
  const { brand, openPopup } = props;
  // const joorAccessLink = "https://jooraccess.com/sign_in";

  const handleClick = () => {
    openPopup(brand);
  };

  return (
    <div
      // href={brand.joorLink || joorAccessLink}
      className={s.brandCard}
      onClick={handleClick}
      // target="_blank"
    >
      <div className={s.brandImage}>
        <img className={s.image} src={brand.image} alt={brand.name} />
      </div>
      <h3 className={s.brandName}>{brand.name}</h3>
    </div>
  );
};
export default BrandCard;
