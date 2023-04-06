import React, { useState } from "react";
import styles from "./contactPage.module.scss";
import { ProductCard } from "../../Components/Products/ProductCard";
import { useEffect } from "react";

export const ContactsPage = ()=> {
const [count, setcount]=useState(0);

const documentClick = () =>{console.log('Click'+`${count}`)};
console.log('PRODUCTS PAGE RENDER');
//     useEffect(()=>{console.log("COMPONENTDIDMOUNT PRODUCT PAGE");
//     document.addEventListener('click', documentClick);
//     return ()=>{
//         console.log("COMPONENT WILL UNMOUNT PRODUCT PAGE");
//         document.removeEventListener('click', documentClick)
//     }
//   }, [count]);
//     useEffect(()=>{console.log("COMPONENTDIDUPDATE PRODUCT PAGE");
//   }, [count]);
    return (

       <div className={styles.contactsPageWrapper}>
            <div >
                <p>helloworld@mail.ru</p>
                <p>8-999-993-25-25</p>
                <p>Russia, Moskow</p>
            </div>
            <div >
                <button onClick={()=>{setcount(count+1)}}>{count}</button>
                <ProductCard productName={`"Яблоко" ${count}`}/>
                <ProductCard productName={"Апельсин"}/>
            </div>
       </div>

        
    )
}