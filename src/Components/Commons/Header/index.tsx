import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
export const Header =()=>{
    return <header>
        <nav className={styles.nav}>
            <ul>
                <li>
                <Link to="/">Main</Link>
                <Link to="/post">PostPage</Link>
                <Link to="/contacts">Contacts</Link>

                {/* <Link to="/contacts" state={"test.state"}>PostPage 11111 </Link> */}
                
                
                </li>
            </ul>
        </nav>
    </header>
}