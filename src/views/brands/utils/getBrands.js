import brands from "../../../data/brands";

const getBrands = (category) => {
  if (!category) {
    return brands;
  }
  const filteredBrands = brands.filter((brand) =>
    brand.category.includes(category)
  );

  return filteredBrands;
};

export default getBrands;
