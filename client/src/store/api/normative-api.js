export const NormativeAPI = {
  async getNormative(itemsOnPage, page = 1) {
    const response = await fetch(
      `/api/normative_documents/?page=${1}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    return result;
  },
};

// export const NormativeAPI = {
//   async getNormative() {
//     const response = await fetch(`/api/normative_documents/`);
//     const result = await response.json();
//     return result;
//   },
// };

export const NormativeDocumetsAPI = {
  async getNormativeDoc() {
    const response = await fetch(`/api/programs/normative_documents/`);
    const result = await response.json();
    return result;
  },
};
