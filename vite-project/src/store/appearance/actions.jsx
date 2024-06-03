import store from "..";
import { _setBackground, _setFontsize, _setColor } from ".";
import { setModal, removeModal } from "../modal/actions";


export const setBackground = data => store.dispatch(_setBackground(data));
export const setColor = data => store.dispatch(_setColor(data));
export const setFontsize = data => store.dispatch(_setFontsize(data)); 