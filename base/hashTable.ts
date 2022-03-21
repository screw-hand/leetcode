/**
 * 学习JavaScript数据结构与算法（第3版）
 * 8.2 散列表
 * https://weread.qq.com/web/reader/99732570718ff67e997e35bk025324d028602522a2b2084
 */
class ValuePair {
  key: unknown;
  value: unknown;

  constructor(key: unknown, value: unknown) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `${this.key}:${this.value}`;
  }
}

class HashTable {
  toStrFn: (str: unknown) => string;
  table: {
    [key: number]: ValuePair;
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
  put(key: number | string, value: unknown) {
    if (value !== undefined && value !== null) {
      const hash = this.hashCode(key);
      this.table[hash] = new ValuePair(hash, value);
      return true;
    }
    return false;
  }

  /**
   * 根据键值从散列表中移除值。
   * @param key
   */
  remove(key: number | string) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair && valuePair.key) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  /**
   * 返回根据键值检索到的特定的值。
   * @param key
   */
  get(key: number | string) {
    if (key !== undefined && key !== null) {
      const hash = this.hashCode(key);
      const valuePair = this.table[hash];
      if (valuePair && valuePair.value) {
        return valuePair.value;
      }
    }
    return undefined;
  }

  /**
   * 散列函数——lose lose散列函数，方法是简单地将每个键值中的每个字母的ASCII值相加
   * @param key
   * @returns number
   */
  loseloseHashCode(key: number | string) {
    if (typeof key === "number") {
      return key;
    }
    const tableHash = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableHash.length; i++) {
      hash += tableHash.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key: number | string) {
    return this.loseloseHashCode(key);
  }
}

export default HashTable