import { configureStore } from '@reduxjs/toolkit'
import scrollSlice from './features/scroll/scrollSlice'
import {user} from './features/Api/user'
const store = configureStore({
    reducer: {
        scroll: scrollSlice,
        [user.reducerPath]: user.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(user.middleware)

})
export default store;