export const SearchAPI = {
  async search(text, page) {
    const response = await fetch(
      `/api/programs/search/?q=${text}&_in=name&_in=description&page=${page}&items_on_page=4`
    );
    const result = await response.json();
    return result;
  },

  async filter(text, analog, po, type, os, itemsOnPage, page) {
    if (analog) {
      if (os !== '' && type !== '') {
        const response = await fetch(
          `/api/programs/search/?q=${text}&_in=name&_in=description&_in=proprietary_counterparts&operation_system_id=${os}&&program_type_id=${type}&page=${page}&items_on_page=${itemsOnPage}`
        );
        const result = await response.json();
        return result;
      } else {
        const error =
          'Выберите класс програмного обеспечения и операционную систему';
        return error;
      }
    } else {
      if (os !== '' && type !== '') {
        const response = await fetch(
          `/api/programs/search/?q=${text}&_in=name&_in=description&operation_system_id=${os}&program_type_id=${type}&page=${page}&items_on_page=${itemsOnPage}`
        );
        const result = await response.json();
        return result;
      } else {
        const error =
          'Выберите класс програмного обеспечения и операционную систему';
        return error;
      }
    }
  },
};
