function isEmpty(item: object | Array<unknown>): boolean {
  if (item instanceof Array) {
    return item.length === 0;
  }
  return Object.keys(item).length === 0;
}

export default isEmpty;
