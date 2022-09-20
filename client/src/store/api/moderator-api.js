export const ModeratorAPI = {
  // получение заявок
  async getApplicationsAPI(page, itemsOnPage) {
    const response = await fetch(
      `/api/requests/?page=${page}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    return result;
  },
  async filter(
    status,
    created_from,
    created_to,
    processed_from,
    processed_to,
    page,
    itemsOnPage
  ) {
    const response = await fetch(
      `/api/requests/filter/?status=${status}&page=${page}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    return result;
  },
  // Получение отчета
  async report(status) {
    const response = await fetch(`/api/requests/report/?status=${status}`);
    const result = await response.json();
    return result;
  },
  // Отметить заявку как выполненную
  async complete(id) {
    const response = await fetch(`/api/requests/:id/complete`);
    const result = await response.json();
    return result;
  },
  // Отметить заявку как отклоненную
  async reject(id) {
    const response = await fetch(`/api/requests/:id/reject`);
    const result = await response.json();
    return result;
  },
  // Сбросить статус заявки
  async reset(id) {
    const response = await fetch(`/api/requests/:id/reset`);
    const result = await response.json();
    return result;
  },
};
