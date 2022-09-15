export const NormativeAPI = {
  async getNormative(itemsOnPage = 10, page = 1) {
    const response = await fetch(
      `/api/normative_documents/?page=${page}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    return result;
  },
};
