import { configureStore } from '@reduxjs/toolkit';
import mediaSlice from './features/media/mediaSlice';


export const store = configureStore({
    reducer : {
        media: mediaSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;