import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import {routes} from "../../../utils/constants/routes"
export const Header =()=>{
    return <header>
        <nav className={styles.nav}>
            <ul>
                <li>
                <Link to={routes.MAIN}>Main</Link>
                <Link to={routes.POSTS}>PostPage</Link>
                <Link to={routes.PRODUCTS}>Contacts</Link>
                <Link to={routes.AUTH}>Authorize</Link>

                {/* <Link to="/contacts" state={"test.state"}>PostPage 11111 </Link> */}
                
                
                </li>
            </ul>
        </nav>
    </header>
}