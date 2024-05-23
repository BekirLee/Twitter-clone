import { useSelector } from 'react-redux'

console.log(useSelector);
export const useModal = () => useSelector(state => state.modal.modal);

// console.log(useAccount);

