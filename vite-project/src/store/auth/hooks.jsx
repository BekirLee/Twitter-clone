import { useSelector } from 'react-redux'

console.log(useSelector);
export const useAccount = () => useSelector(state => state.auth.currentAccount);
// console.log(useAccount);

