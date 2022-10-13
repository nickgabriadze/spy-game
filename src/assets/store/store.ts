import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import gameInfoReducer from './gameInfoReducer'

const store = configureStore({
    reducer:{
        gameReducer: gameInfoReducer
    }
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export type RootState = ReturnType<typeof store.getState>

export default store;