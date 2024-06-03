import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    backgroundColor: {
        name: 'darker',
        primary: '#000',
        secondary: '#16181c',
        third: '#273340',
        modal: '#5b708366'
    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8",
        base: "#e7e9ea",
        baseSecondary: '#71767b'
    },
    boxShadow: 'rgba(101,119,134,0.2) 0px 0px 15px, rgba(101,119,134,0.2) 0px 0px 3px 1px',
    fontSize: 16

    // backgroundColor: {
    // name: 'light',
    //     primary: '#15202b',
    //     secondary: '#1e2732',
    //     third: '#273340',
    // modal: '#5b708366'   
    // },
    // color: {
    //     primary: "#1d9bf0",
    //     secondary: "#8ecdf8",
    // base: "#f7f9f9",
    // baseSecondary: '#8b98a5',
    // baseSecondary: '#71767b',
    // boxShadow: 'rgba(101,119,134,0.2) 0px 0px 15px rgba(101,119,134,0.2) 0px 0px 3px 1px',
    // },
    // fontSize: 16

    // backgroundColor: {
    //     name: 'losh',
    //     primary: '#fff',
    //     secondary: '#f7f9f9',
    //     third: '#eff3f4',
    //     modal: '#5b708366'
    // },
    // color: {
    //     primary: "#1d9bf0",
    //     secondary: "#8ecdf8",
    // base: "#0f1419",
    // baseSecondary: '#536471'
    //     baseSecondary: '#8b98a5'
    // },
    // boxShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 15px ,rgba(101,119,134,0.15) 0px 0px 3px 1px',
    // fontSize: 16
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
