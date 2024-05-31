import store from "..";
import { _setModal, _removeModal, _setBackground, _setFontsize } from ".";


export const setBackground = data => store.dispatch(_setBackground(data));
export const setColor = data => store.dispatch(_setColor(data));
export const setFontsize = data => store.dispatch(_setFontsize(data)); 