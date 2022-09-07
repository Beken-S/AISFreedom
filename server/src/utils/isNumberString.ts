function isNumberString(str: string) {
  return str != '' && !isNaN(Number(str));
}

export default isNumberString;
