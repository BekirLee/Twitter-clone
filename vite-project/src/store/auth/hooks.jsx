import { useSelector } from 'react-redux'

console.log(useSelector);
const useAccount = () => useSelector(state => state.auth.currentAccount);
// console.log(useAccount);

export default useAccount   
