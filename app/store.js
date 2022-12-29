import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './features/card/cardSlice'
import filterSlice from './features/filter/filterSlice'
import scrollSlice from './features/scroll/scrollSlice'
const store = configureStore({
    reducer: {
        card: cardSlice,
        filter: filterSlice,
        scroll: scrollSlice
    }
})
export default store;