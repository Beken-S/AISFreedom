export const LicensesAPI = {
  async getLicenses() {
    const response = await fetch(`/api/licenses/`);
    const result = await response.json();
    return result;
  },

  async getLicense(id) {
    const response = await fetch(`/api/licenses/${id}`);
    const result = await response.json();
    return result;
  },
};
