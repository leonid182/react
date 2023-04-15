import { configureStore } from "@reduxjs/toolkit"
import{userDataNameReducer, userDataReducer} from "./userData/index";
import{productsDataNameReducer, productsDataReducer} from "./products/index";

 export const store = configureStore({
    reducer: {
    [userDataNameReducer]:userDataReducer,
    [productsDataNameReducer]:productsDataReducer
     },
    devTools: true,
    });

     export type TState = ReturnType<typeof store.getState>