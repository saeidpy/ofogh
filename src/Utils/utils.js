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
