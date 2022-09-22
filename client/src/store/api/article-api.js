export const ArticleAPI = {
  async getArticle() {
    const response = await fetch(`/api/articles/`);
    const result = await response.json();
    return result;
  },
  async getArticleDoc(file_name) {
    const response = await fetch(`/api/articles/${file_name}`);
    const result = await response.json();
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
