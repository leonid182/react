import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import {routes} from "../../../utils/constants/routes"
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail, getUserToken} from "../../../store/userData/selectors";
import { resetUserData } from "../../../store/userData/index";

export const Header =()=>{
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail);
    const token = useSelector(getUserToken);
    const logOut = ()=>{
        dispatch(resetUserData())
    }
    return <header>
        <nav className={styles.nav}>
            <ul>
                <li>
                <Link to={routes.MAIN}>Main</Link>
                <Link to={routes.POSTS}>PostPage</Link>
                <Link to={routes.PRODUCTS}>Contacts</Link>

                {email && <span>{email}</span> }
                {
                    token ? <button onClick={logOut} >LogOUT</button>:   <Link to={routes.AUTH}>Authorize</Link>
                }
              
             
                {/* <Link to="/contacts" state={"test.state"}>PostPage 11111 </Link> */}
                
                
                </li>
            </ul>
        </nav>
    </header>
}


