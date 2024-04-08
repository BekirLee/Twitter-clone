import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //
    currentAccount: {
        userName: "Nihad",
        avatar: "src/assets/image 46.png",
        email: "nihadbekirli8@gmail.com"
    },
    accounts: [
        // 
    ]
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // 
        _addAccount: (state, action) => {
            state.currentAccount.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.find(account => account.id === !action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer;

console.log(auth)