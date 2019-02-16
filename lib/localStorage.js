export const getItemFromStorage = key => {
  if (!localStorage) return;

  try {
    return JSON.parse(localStorage.getItem(key) || false);
  } catch (err) {}
};

export const storeItem = (key, value) => {
  if (!localStorage) return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event('storage:updated'));
  } catch (err) {}
};

export const removeItemFromStorage = key => {
  if (!localStorage) return;

  try {
    localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage:updated'));
  } catch (err) {}
};

export const getLocalStorageLength = () => {
  if (!localStorage) return;

  try {
      return localStorage.length;
  } catch (err) {}
}