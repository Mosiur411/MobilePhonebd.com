import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    scroll: false

}
const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        hiddenInput(state, action) {
            state.scroll = action.payload
        }
    }

})
export const { hiddenInput } = scrollSlice.actions;
export default scrollSlice.reducer