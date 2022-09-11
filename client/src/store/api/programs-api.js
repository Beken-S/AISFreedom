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
  async getLicense(id_license) {
    const response = await fetch(`/api/licenses/${id_license}`);
    const result = await response.json();
    return result;
  },
  async getClassProgram(id_class) {
    const response = await fetch(`/api/program/types/${id_class}`);
    const result = await response.json();
    return result;
  },
  async getOsProgram(id_os) {
    const response = await fetch(`/api/operation_systems/${id_os}`);
    const result = await response.json();
    return result;
  },
  async getAllOsProgram() {
    const response = await fetch(`/api/operation_systems/`);
    const result = await response.json();
    return result;
  },
  async getAllTypesProgram() {
    const response = await fetch(`/api/program/types/`);
    const result = await response.json();
    return result;
  },
};
