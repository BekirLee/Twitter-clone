import { _setCurrentAccount } from "./index";
import store from "..";
export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data)); 

