export class Storage {
  //* Retreive item from localstorage */
  static getValueFromLS(name: string) {
    return localStorage?.getItem(name);
  }

  //* Save item to localstorage */
  static setValueToLS(name: string, value: string) {
    return localStorage.setItem(name, value);
  }

  //* Delete item from localstorage */
  static removeValueFromLS(name: string) {
    return localStorage?.removeItem(name);
  }
}
