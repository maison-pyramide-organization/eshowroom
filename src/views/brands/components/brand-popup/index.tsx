import s from "./_s.module.scss";
import truncateText from "@/utils/truncateText";
// @ts-ignore
import CloseIcon from "@a/icons/close-icon.svg?react";

interface Iprops {
  brand: any;
  closePopup: () => void;
}

export const BrandPopup = (props: Iprops) => {
  const { brand, closePopup } = props;
  // const description = truncateText(brand.description, 200);
  const description = brand.description;
  return (
    <div className={s.wraper}>
      <div className={s.popup}>
        <button type="button" className={s.closeBtn} onClick={closePopup}>
          <CloseIcon className={s.closeBtn_icon} />
        </button>
        <h1 className={s.brandName}>{brand.name}</h1>
        <p className={s.brandDescription}>{description}</p>
        <a href={brand.joorLink}>EXPLORE BRAND ON JOOR</a>
      </div>
    </div>
  );
};
