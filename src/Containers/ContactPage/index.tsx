import React, { useState } from "react";
import styles from "./contactPage.module.scss";
import { ProductCard } from "../../Components/Products/ProductCard";
import { getProducts } from "../../store/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { resetUserData } from "../../store/products/index";


export const ContactsPage = ()=> {
const [count, setcount]=useState(0);

const product = useSelector(getProducts)
const diapatch=useDispatch();
const deleteProducts=()=>{
    diapatch(resetUserData());
}

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
                <ProductCard productName={`"Яблоко"`}/>
                <ProductCard productName={"Апельсин"}/>
                <div>{product.map((product, index)=>(
                        <div key={index}>
                            <span>{`Товар ${product.name}`}</span>
                            <span>{`Кол-во ${product.count}`}</span>
                            <button onClick={deleteProducts}>Delete</button>
                        </div>
                        
                ))}</div>
            </div>

            
       </div>

        
    )
}