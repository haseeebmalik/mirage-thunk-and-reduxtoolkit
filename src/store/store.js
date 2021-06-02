import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice'


export const store=configureStore({
    reducer:{
        counter:counterReducer,
        //we can add multiple reducers here as follow
        //reducer2:reducer2
        
    }
})

