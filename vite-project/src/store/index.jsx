import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'

import { useSelector } from 'react-redux'

// console.log(useSelector);
export const useAccount = () => useSelector(state => state.auth.currentAccount);
console.log(useAccount);


const store = configureStore({
    reducer: {
        // 
        auth
    }
})

export default store;