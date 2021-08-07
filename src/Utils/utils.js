import { USER_AUTH } from "../Consistent/consistent";

export function setLocalStorage(name, data) {
  if (name === USER_AUTH) {
    var event = new Event("authInserted");
    event.value = data;
    event.key = name;
    document.dispatchEvent(event);
  }
  localStorage.setItem(name, JSON.stringify(data));
}
export function getLocalStorage(name) {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : {};
}
export const isEmptyObject = (object) => {
  return object == null || Object.keys(object).length === 0;
};
export function toEnglishNum(num) {
  if (num) {
    var i = 0,
      num = num.toString(),
      len = num.length,
      res = "",
      pos,
      persianNumbers =
        typeof persianNumber == "undefined"
          ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
          : persianNumbers;

    for (; i < len; i++)
      if (~(pos = persianNumbers.indexOf(num.charAt(i)))) res += pos;
      else res += num.charAt(i);
    return res;
  } else {
    return num;
  }
}
