function isKey<T>(keys: T[], key: unknown): key is T {
  return keys.includes(key as T);
}

export default isKey;
