import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IUserData {
    email:string,
    token:string,
    // name:string,
    // count:number
    
}
const initialState = {
    email:'',
    token:''
    
}
const slice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
    setUserData(state, {type, payload}:PayloadAction<IUserData>){
        console.log(type);
        
        return {...state, ...payload}
    },
    resetUserData(){
        return {...initialState};
    }
    },

   
    });

export const {reducer:userDataReducer, name:userDataNameReducer, actions} = slice;
export const {setUserData, resetUserData } = actions;