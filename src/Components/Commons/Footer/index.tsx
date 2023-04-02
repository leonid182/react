import React from "react";
import styles from "./Footer.module.scss"
export const Footer =()=>{
    return <footer className={styles.footer}>
        <nav>
            <ul>
                <li>
                <a href="">Main</a>
                <a href="">About Us</a>
                <a href="">Contacts</a>
                <a href="">Blog</a>
                </li>
            </ul>
        </nav>
    </footer>
}