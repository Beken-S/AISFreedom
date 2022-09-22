export const DepartmentsAPI = {
  async getDepartments() {
    const response = await fetch(`/api/departments/`);
    const result = await response.json();
    return result;
  },
};
