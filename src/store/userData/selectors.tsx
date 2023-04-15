import { createSelector } from "@reduxjs/toolkit";
import { TState, store } from "../configureStore";


 const getUserData=(state:TState)=>state.userData;


export const getUserEmail = createSelector(getUserData, (state)=>state.email)
export const getUserToken = createSelector(getUserData, (state)=> state.token)

