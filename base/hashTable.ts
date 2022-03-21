class HashTable {
  toStrFn: (str: unknown) => string;
  table: {
    [key: number]: unknown;
  };

  constructor(toStrFn = (str: unknown) => (str += "")) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  /**
   * 向散列表增加一个新的项（也能更新散列表）。
   * @params key
   * @params value
   */
  put(key: number, value: unknown) {}

  /**
   * 根据键值从散列表中移除值。
   * @param key
   */
  remove(key: number) {}

  /**
   * 返回根据键值检索到的特定的值。
   * @param key
   */
  get(key: number) {}

  loseloseHashCode(key: number | string) {}

  hashCode(key: number | string) {
    return this.loseloseHashCode(key);
  }
}
