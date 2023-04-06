import React from "react";
import styles from "./Auth.module.scss";
import { AuthForm } from "../../Components/Auth/AuthForm";


export const Auth =()=> {
return (
    <div className={styles.container}>
        <AuthForm/>
    </div>
)
}