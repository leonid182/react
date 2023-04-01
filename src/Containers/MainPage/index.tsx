import React from "react";
import { Header } from "../../Components/Commons/Header";
import { Footer } from "../../Components/Commons/Footer";

import { MainInfo } from "../../Components/Main/MainInfo";


export const MainPage =()=>{
    return <div>
        <Header/>
        <h1>Hello, MAINPAGE</h1>
        <MainInfo/>
        <Footer/>
        
    </div>
}