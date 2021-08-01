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
  return JSON.parse(localStorage.getItem(name)) ?? {};
}
