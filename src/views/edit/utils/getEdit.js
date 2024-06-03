import edits from "@/data/edits";
const getEdit = (slug) => {
  const edit = edits.filter((edit) => edit.slug == slug);
  return edit[0];
};
export default getEdit;
