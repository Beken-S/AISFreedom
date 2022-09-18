export const ArticleAPI = {
  async getArticle(itemsOnPage = 10, page = 1) {
    const response = await fetch(
      `/api/articles/?page=${page}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    console.log(result);
    return result;
  },
};

// export const ArticleAPI = {
//   async getArticle() {
//     const response = await fetch(`/api/articles/`);
//     const result = await response.json();
//     return result;
//   },
// };
