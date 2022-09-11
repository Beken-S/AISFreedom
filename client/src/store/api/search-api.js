export const SearchAPI = {
  async filter(
    text = '',
    analog = false,
    po = true,
    type = '',
    os = '',
    itemsOnPage,
    page = 1
  ) {
    const response = await fetch(
      `/api/programs/search/?q=${text}&_in=name${
        analog ? `&_in=proprietary_counterparts` : ''
      }${os !== '' ? `&operation_system_id=${os}` : ''}${
        type !== '' ? `&program_type_id=${type}` : ''
      }&page=${page}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    return result;
  },
};
