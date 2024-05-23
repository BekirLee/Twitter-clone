import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //
    currentAccount: {
        id: 1,
        userName: "Nihad",
        avatar: "src/assets/imgs/image 46.png",
        fullName: "nihadbekirli8@gmail.com"
    },
    accounts: [
        {
            id: 1,
            userName: "Nihad",
            avatar: "src/assets/imgs/image 46.png",
            fullName: "nihadbekirli8@gmail.com"
        },
        {
            id: 2,
            userName: "Bekir",
            avatar: "src/assets/imgs/image 46.png",
            fullName: "bekirli8@gmail.com"
        },
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

// console.log(auth)