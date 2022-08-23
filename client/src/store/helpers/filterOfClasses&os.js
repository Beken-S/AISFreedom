export const filterOfChecked = (freesoft, filters) => {
  const filtered = [];
  filters.map((elem) => {
    let filterOfType = freesoft.filter((el) => el.type === elem.type);
    filtered.push(...filterOfType);
    filterOfType = [];
  });
  return filtered;
};
