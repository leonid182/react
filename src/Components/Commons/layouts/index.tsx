import React from "react"
import { Header } from "../Header"
import { Footer } from "../Footer"
import styles from "./layouts.module.scss"

type TProps = {
    children: JSX.Element
}


export const Layout =({children}:TProps)=>{
    return <div className={styles.pageWrapper}>
        <Header/>
        {children}
        <Footer/>
    </div> 
} 