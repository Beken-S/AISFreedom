/**
 * Форматирование даты в формат "25 августа 2022 в 14:00"
 * @param date
 * @returns {string}
 */
export default function formatDate(date) {
  const formatedDate = new Date(date); // Fri Aug 26 2022 01:14:39 GMT+0400

  return `${formatedDate.toLocaleDateString('default', {
    month: 'numeric',
    day: 'numeric', // 26 августа
  })}.${formatedDate.getFullYear()}`;
}
