export const PromramsAPI = {
  async getPrograms(itemsOnPage, page = 1) {
    const response = await fetch(
      `/api/programs/?page=${page}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    return result;
  },
  async getProgram(id) {
    const response = await fetch(`/api/programs/${id}`);
    const result = await response.json();
    return result;
  },
};
