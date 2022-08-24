export const filterOfChecked = (freesoft, types, os) => {
  const filtered = [];
  if (types.length === 0 && os.length > 0) {
    os.map((elem) => {
      let filterOfOs = freesoft.filter((el) => el.os?.match(elem.os));
      filtered.push(...filterOfOs);
      filterOfOs = [];
      return filtered;
    });
    return filtered;
  } else if (types.length > 0 && os.length > 0) {
    types.map((elem) => {
      let filterOfType = freesoft.filter((el) => el.type === elem.type);
      os.map((oselem) => {
        filterOfType = filterOfType.filter((el) => el.os?.match(oselem.os));
        return filterOfType;
      });
      filtered.push(...filterOfType);
      filterOfType = [];
      return filtered;
    });
  }
  return filtered;
};
