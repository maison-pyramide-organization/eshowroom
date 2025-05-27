import brands from "../../../data/brands";

const getBrands = (category) => {
  if (!category) {
    return brands;
  }
  const filteredBrands = brands.filter((brand) => brand.category === category);
  return filteredBrands;
};

export default getBrands;
