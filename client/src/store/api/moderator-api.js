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
    status = 'current',
    created_from,
    created_to,
    processed_from,
    processed_to,
    page,
    itemsOnPage = 10
  ) {
    // http://localhost:3000/api/requests/filter/?status=current&created_from=2021-03-11&created_to=2021-10-22&processed_from=2021-01-01&processed_to=2021-11-08&page=1&items_on_page=1
    const response = await fetch(
      `/api/requests/filter/?status=${status}&page=${page}&items_on_page=${itemsOnPage}`
    );
    const result = await response.json();
    return result;
  },
  // Отметить заявку как выполненную
  async complete(id) {
    const response = await fetch(`/api/requests/${id}/complete`, {
      method: 'PATCH',
    });
    const result = await response.json();
    return result;
  },
  // Отметить заявку как отклоненную
  async reject(id) {
    const response = await fetch(`/api/requests/${id}/reject`, {
      method: 'PATCH',
    });
    const result = await response.json();
    return result;
  },
  // Сбросить статус заявки
  async reset(id) {
    const response = await fetch(`/api/requests/${id}/reset`, {
      method: 'PATCH',
    });
    const result = await response.json();
    return result;
  },
  async getDepartments() {
    const response = await fetch(`/api/departments`);
    const result = await response.json();
    return result;
  },
};
