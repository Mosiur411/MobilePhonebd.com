import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    filter: [],
    price: "",
    brand: "",
    stoke: false,
    keyboardType: ''

}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {}

})
export default filterSlice.reducer