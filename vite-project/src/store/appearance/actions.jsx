import store from "..";
import { _setModal, _removeModal } from ".";


export const setModal = (name, data = {}) => store.dispatch(_setModal({ name, data }));
export const removeModal = () => store.dispatch(_removeModal()); 