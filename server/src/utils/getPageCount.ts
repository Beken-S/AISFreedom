function getPageCount(itemsOnPage: number, countItems: number): number {
  return Math.ceil(countItems / itemsOnPage);
}

export default getPageCount;
