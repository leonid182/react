import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IProducts {
    name:string,
    count:number,
}
interface IProductsState {
    data:IProducts[]
}
const initialState:IProductsState = {
    data:[]
    
}
const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, {payload}:PayloadAction<IProducts>){
            return {...state, data:[...state.data, payload]};
        },

        resetUserData(){
            return {...initialState};
        }
    },

   
    });

export const {reducer:productsDataReducer, name:productsDataNameReducer, actions} = slice;
export const {addProduct, resetUserData } = actions;