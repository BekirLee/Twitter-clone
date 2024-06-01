import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //
    // backgroundColor: {
    //     primary: '#000',
    //     secondary: '#16181c',
    //     third: '#273340'
    // },
    // color: {
    //     primary: "#1d9bf0",
    //     secondary: "#8ecdf8",
    //     base:"#e7e9ea"
    // baseSecondary: '#71767b'
    // },
    // fontSize: 16

    backgroundColor: {
        primary: '#15202b',
        secondary: '#1e2732',
        third: '#273340'
    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8",
        base: "#f7f9f9",
        // baseSecondary: '#71767b'
        baseSecondary: 'red'
    },
    fontSize: 16
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
            state.fontSize = action.payload
        }
    }
})

export const { _setBackground, _setColor, _setFontsize } = appearance.actions
export default appearance.reducer;
