import s from "./_s.module.scss";
import BrandCard from "./components/brand-card";
import { BrandPopup } from "./components/brand-popup";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import getBrands from "./utils/getBrands.js";

const Brands = () => {
  const [popupBrand, setPopupBrand] = useState(null);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const brands = getBrands(category);

  const openBrandPopup = (brand) => {
    setPopupBrand(brand);
  };
  const closeBrandPopup = () => {
    setPopupBrand(null);
  };

  return (
    <main>
      {/* HEADER TITLE AND SUBTITLE */}
      <h1 className={s.title}>EXPLORE BRANDS</h1>
      <p className={s.subtitle}>
        The Showroom gained immediate recognition for it’s heavy roster of
        sustainable, responsible and award winning emerging and independent
        designers presentiong a fresh take on advanced contemporary womenswear,
        accessories, footwear and jewelry.
      </p>

      <ul className={s.brandsList}>
        {brands.map((brand) => (
          <li key={brand.id}>
            <BrandCard brand={brand} openPopup={openBrandPopup} />
          </li>
        ))}
      </ul>
      {popupBrand && (
        <BrandPopup brand={popupBrand} closePopup={closeBrandPopup} />
      )}
    </main>
  );
};

export default Brands;
