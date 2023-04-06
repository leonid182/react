import React, {useEffect} from "react";
import { Header } from "../../Components/Commons/Header";
import { Footer } from "../../Components/Commons/Footer";
import { MainInfo } from "../../Components/Main/MainInfo";
import styles from "./MainPage.module.scss"
import { AuthForm } from "../../Components/Auth/AuthForm";


export const MainPage =()=>{
//     useEffect(()=>{console.log("COMPONENTDIDMOUNT APP");
//   }, []);
    return <div className={styles.mainPageWrapper}>
        
        <div>
           
            <h1>Hello, MAINPAGE</h1>
            <MainInfo/>
            
        </div>
       
        
    </div>
}