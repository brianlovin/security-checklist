// @flow
import {
  getItemFromStorage,
  storeItem,
  removeItemFromStorage,
} from '../../lib/localStorage';

export const getCheckedStatusById = (id: string) => getItemFromStorage(id);
export const setCheckedStatusById = (id: string, store: boolean) =>
  store ? storeItem(id, true) : removeItemFromStorage(id);
