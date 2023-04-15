import { createSelector } from "@reduxjs/toolkit";
import { TState, store } from "../configureStore";


 const getProductsState=(state:TState)=>state.products;



export const getProducts = createSelector(getProductsState, ({data})=> data)
