import { useSelector } from 'react-redux'

// console.log(useSelector);
export const useAccount = () => useSelector(state => state.auth.currentAccount);
export const useAccounts = () => useSelector(state => state.auth.accounts);

// console.log(useAccount);

