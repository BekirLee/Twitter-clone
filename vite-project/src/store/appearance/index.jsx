import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //
    backgroundColor: {
        primary: '#000',
        secondary: '#16181c',
        third: '#273340'
    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8"
    },
    fontsize: 16
}

const appearance = createSlice({
    name: "appearance",
    initialState,
    reducers: {
        // 
        _setBackground: (state, action) => {
            state.backgroundColor = action.payload
        },
        _setColor: (state, action) => {
            state.color = action.payload
        },
        _setFontsize: state => {
            state.fontsize = action.payload
        }
    }
})

export const { _setBackground, _setColor, _setFontsize } = appearance.actions
export default appearance.reducer;
