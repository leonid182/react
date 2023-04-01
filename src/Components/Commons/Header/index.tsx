import React from "react";
import styles from "./Header.module.css"
export const Header =()=>{
    return <header>
        <nav className={styles.nav}>
            <ul>
                <li>
                <a href="">Main</a>
                <a href="">About Us</a>
                <a href="">Contacts</a>
                <a href="">Blog</a>
                </li>
            </ul>
        </nav>
    </header>
}