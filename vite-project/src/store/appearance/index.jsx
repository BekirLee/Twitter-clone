import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //
    backgroundColor: {
        primary: '#000',
        secondary: '#16181c',
        third: '#273340'
    }
}

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        // 
        _setModal: (state, action) => {
            state.modal = action.payload
        },
        _removeModal: state => {
            state.modal = false
        }
    }
})

export const { _setModal, _removeModal } = modal.actions
export default modal.reducer;
