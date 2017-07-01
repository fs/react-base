const STORAGE = localStorage;

export default class Storage {
  static set(key, value) {
    const data = typeof value === 'object' ?
      JSON.stringify(value) :
      value;

    STORAGE.setItem(key, data);
  }

  static get(key) {
    const data = STORAGE.getItem(key);

    try {
      JSON.parse(data);
    } catch(e) {
      return data;
    }

    return JSON.parse(data);
  }

  static remove(key) {
    STORAGE.removeItem(key);
  }

  static clear() {
    STORAGE.clear();
  }
}
